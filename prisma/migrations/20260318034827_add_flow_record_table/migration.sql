/*
  Warnings:

  - You are about to drop the `flow_fallbacks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_flow_states` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `flow_fallbacks` DROP FOREIGN KEY `flow_fallbacks_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_flow_states` DROP FOREIGN KEY `user_flow_states_flow_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_flow_states` DROP FOREIGN KEY `user_flow_states_owner_user_id_fkey`;

-- DropTable
DROP TABLE `flow_fallbacks`;

-- DropTable
DROP TABLE `user_flow_states`;

-- CreateTable
CREATE TABLE `flow_records` (
    `id` VARCHAR(191) NOT NULL,
    `sender_id` VARCHAR(191) NOT NULL,
    `page_id` VARCHAR(191) NOT NULL,
    `flow_id` VARCHAR(191) NOT NULL,
    `current_node_id` VARCHAR(191) NOT NULL,
    `variables` JSON NOT NULL,
    `status` ENUM('running', 'pending', 'completed', 'cancelled', 'error') NOT NULL DEFAULT 'running',
    `last_interaction` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `error_log` TEXT NULL,

    INDEX `flow_records_status_idx`(`status`),
    UNIQUE INDEX `flow_records_sender_id_page_id_key`(`sender_id`, `page_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flow_records` ADD CONSTRAINT `flow_records_flow_id_fkey` FOREIGN KEY (`flow_id`) REFERENCES `flows`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_records` ADD CONSTRAINT `flow_records_page_id_fkey` FOREIGN KEY (`page_id`) REFERENCES `pages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
