/*
  Warnings:

  - You are about to drop the `flow_comments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `flow_comments` DROP FOREIGN KEY `flow_comments_flow_share_id_fkey`;

-- DropForeignKey
ALTER TABLE `flow_comments` DROP FOREIGN KEY `flow_comments_parent_id_fkey`;

-- DropForeignKey
ALTER TABLE `flow_comments` DROP FOREIGN KEY `flow_comments_user_id_fkey`;

-- DropTable
DROP TABLE `flow_comments`;

-- CreateTable
CREATE TABLE `flow_share_comments` (
    `id` VARCHAR(191) NOT NULL,
    `flow_share_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `parent_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flow_share_comments` ADD CONSTRAINT `flow_share_comments_flow_share_id_fkey` FOREIGN KEY (`flow_share_id`) REFERENCES `flow_shares`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_share_comments` ADD CONSTRAINT `flow_share_comments_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_share_comments` ADD CONSTRAINT `flow_share_comments_parent_id_fkey` FOREIGN KEY (`parent_id`) REFERENCES `flow_share_comments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
