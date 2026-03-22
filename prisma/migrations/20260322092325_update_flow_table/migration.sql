/*
  Warnings:

  - You are about to drop the `pages` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id,name]` on the table `flows` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `page_access_token` to the `flows` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `flow_records` DROP FOREIGN KEY `flow_records_page_id_fkey`;

-- DropForeignKey
ALTER TABLE `flows` DROP FOREIGN KEY `flows_page_id_fkey`;

-- DropForeignKey
ALTER TABLE `pages` DROP FOREIGN KEY `pages_user_id_fkey`;

-- DropIndex
DROP INDEX `flow_records_page_id_fkey` ON `flow_records`;

-- DropIndex
DROP INDEX `flows_page_id_fkey` ON `flows`;

-- AlterTable
ALTER TABLE `flows` ADD COLUMN `page_access_token` TEXT NOT NULL;

-- DropTable
DROP TABLE `pages`;

-- CreateIndex
CREATE UNIQUE INDEX `flows_user_id_name_key` ON `flows`(`user_id`, `name`);
