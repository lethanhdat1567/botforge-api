/*
  Warnings:

  - Added the required column `related_id` to the `notifications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notifications` ADD COLUMN `related_id` VARCHAR(191) NOT NULL;
