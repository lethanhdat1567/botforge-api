/*
  Warnings:

  - You are about to drop the column `avatar` on the `notifications` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `notifications` DROP COLUMN `avatar`,
    ADD COLUMN `thumbnail` VARCHAR(191) NULL;
