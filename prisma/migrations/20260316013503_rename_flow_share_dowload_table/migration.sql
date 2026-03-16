/*
  Warnings:

  - You are about to drop the `flow_downloads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `flow_downloads` DROP FOREIGN KEY `flow_downloads_flow_share_id_fkey`;

-- DropForeignKey
ALTER TABLE `flow_downloads` DROP FOREIGN KEY `flow_downloads_user_id_fkey`;

-- DropTable
DROP TABLE `flow_downloads`;

-- CreateTable
CREATE TABLE `flow_share_dowloads` (
    `id` VARCHAR(191) NOT NULL,
    `flow_share_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `flow_share_dowloads_flow_share_id_idx`(`flow_share_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flow_share_dowloads` ADD CONSTRAINT `flow_share_dowloads_flow_share_id_fkey` FOREIGN KEY (`flow_share_id`) REFERENCES `flow_shares`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_share_dowloads` ADD CONSTRAINT `flow_share_dowloads_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
