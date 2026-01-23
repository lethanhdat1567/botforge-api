/*
  Warnings:

  - You are about to drop the column `page_access_token` on the `flows` table. All the data in the column will be lost.
  - You are about to drop the column `platform` on the `flows` table. All the data in the column will be lost.
  - Made the column `page_id` on table `flows` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `flows` DROP COLUMN `page_access_token`,
    DROP COLUMN `platform`,
    MODIFY `page_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `pages` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `platform` ENUM('facebook', 'instagram', 'zalo') NOT NULL,
    `page_uid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `access_token` TEXT NOT NULL,
    `status` ENUM('active', 'revoked', 'expired') NOT NULL DEFAULT 'active',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `pages_platform_page_uid_key`(`platform`, `page_uid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flows` ADD CONSTRAINT `flows_page_id_fkey` FOREIGN KEY (`page_id`) REFERENCES `pages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pages` ADD CONSTRAINT `pages_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
