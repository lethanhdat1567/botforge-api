/*
  Warnings:

  - You are about to drop the column `isRead` on the `message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `message` DROP COLUMN `isRead`,
    ADD COLUMN `readByAdmin` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `readByUser` BOOLEAN NOT NULL DEFAULT false;
