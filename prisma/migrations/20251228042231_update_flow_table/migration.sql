/*
  Warnings:

  - You are about to drop the column `timeout_text` on the `flows` table. All the data in the column will be lost.
  - Added the required column `page_access_token` to the `flows` table without a default value. This is not possible if the table is not empty.
  - Added the required column `page_id` to the `flows` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_flow_states` DROP FOREIGN KEY `user_flow_states_flow_id_fkey`;

-- DropIndex
DROP INDEX `user_flow_states_flow_id_fkey` ON `user_flow_states`;

-- AlterTable
ALTER TABLE `flows` DROP COLUMN `timeout_text`,
    ADD COLUMN `page_access_token` TEXT NOT NULL,
    ADD COLUMN `page_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `timeout_json` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `user_flow_states` ADD CONSTRAINT `user_flow_states_flow_id_fkey` FOREIGN KEY (`flow_id`) REFERENCES `flows`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
