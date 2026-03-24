/*
  Warnings:

  - You are about to drop the column `page_id` on the `flow_records` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `flow_records` DROP FOREIGN KEY `flow_records_page_id_fkey`;

-- DropIndex
DROP INDEX `flow_records_page_id_fkey` ON `flow_records`;

-- AlterTable
ALTER TABLE `flow_records` DROP COLUMN `page_id`;
