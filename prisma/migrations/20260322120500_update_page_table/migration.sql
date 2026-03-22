/*
  Warnings:

  - You are about to drop the column `page_access_token` on the `flows` table. All the data in the column will be lost.
  - You are about to drop the column `page_id` on the `flows` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `flows` DROP COLUMN `page_access_token`,
    DROP COLUMN `page_id`;

-- CreateTable
CREATE TABLE `pages` (
    `id` VARCHAR(191) NOT NULL,
    `page_uid` VARCHAR(191) NOT NULL,
    `page_access_token` TEXT NOT NULL,
    `flow_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `pages_page_uid_key`(`page_uid`),
    UNIQUE INDEX `pages_flow_id_key`(`flow_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pages` ADD CONSTRAINT `pages_flow_id_fkey` FOREIGN KEY (`flow_id`) REFERENCES `flows`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_records` ADD CONSTRAINT `flow_records_page_id_fkey` FOREIGN KEY (`page_id`) REFERENCES `pages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
