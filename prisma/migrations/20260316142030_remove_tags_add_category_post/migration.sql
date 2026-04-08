/*
  Warnings:

  - Drops implicit M2M `_PostTags` / `_posttags` and `tags` when present (prod may never have had them; Linux may use `_PostTags` vs Windows lowercasing).
  - Adds required `category_id` on `posts` with a default "uncategorized" row so existing post rows remain valid.

*/
-- 1) Remove tag join + tags if they exist (no separate FK drops needed for DROP TABLE)
DROP TABLE IF EXISTS `_PostTags`;
DROP TABLE IF EXISTS `_posttags`;
DROP TABLE IF EXISTS `tags`;

-- 2) Categories must exist before posts.category_id + FK
CREATE TABLE IF NOT EXISTS `post_categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `post_categories_name_key`(`name`),
    UNIQUE INDEX `post_categories_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Default category for backfill (stable id for all environments)
INSERT INTO `post_categories` (`id`, `name`, `slug`, `created_at`, `updated_at`)
SELECT '00000000-0000-4000-8000-000000000001', 'Uncategorized', 'uncategorized', CURRENT_TIMESTAMP(3), CURRENT_TIMESTAMP(3)
FROM DUAL
WHERE NOT EXISTS (SELECT 1 FROM `post_categories` WHERE `slug` = 'uncategorized' LIMIT 1);

-- 3) Add category_id when missing, backfill, then NOT NULL + FK (safe if column already exists from a partial run)
SET @db := DATABASE();

SET @add_col := (
    SELECT IF(
        (
            SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_SCHEMA = @db AND TABLE_NAME = 'posts' AND COLUMN_NAME = 'category_id'
        ) = 0,
        'ALTER TABLE `posts` ADD COLUMN `category_id` VARCHAR(191) NULL',
        'SELECT 1'
    )
);
PREPARE stmt_add_col FROM @add_col;
EXECUTE stmt_add_col;
DEALLOCATE PREPARE stmt_add_col;

UPDATE `posts`
SET `category_id` = (SELECT `id` FROM `post_categories` WHERE `slug` = 'uncategorized' LIMIT 1)
WHERE `category_id` IS NULL;

ALTER TABLE `posts` MODIFY `category_id` VARCHAR(191) NOT NULL;

SET @add_fk := (
    SELECT IF(
        (
            SELECT COUNT(*) FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
            WHERE CONSTRAINT_SCHEMA = @db
              AND TABLE_NAME = 'posts'
              AND CONSTRAINT_NAME = 'posts_category_id_fkey'
        ) = 0,
        'ALTER TABLE `posts` ADD CONSTRAINT `posts_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `post_categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE',
        'SELECT 1'
    )
);
PREPARE stmt_add_fk FROM @add_fk;
EXECUTE stmt_add_fk;
DEALLOCATE PREPARE stmt_add_fk;
