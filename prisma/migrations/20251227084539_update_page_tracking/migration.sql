/*
  Warnings:

  - Added the required column `page_id` to the `user_flow_states` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_flow_states` ADD COLUMN `page_id` VARCHAR(191) NOT NULL;
