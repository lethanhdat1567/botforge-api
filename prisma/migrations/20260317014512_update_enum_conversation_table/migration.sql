/*
  Warnings:

  - You are about to alter the column `status` on the `conversation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(9))`.

*/
-- AlterTable
ALTER TABLE `conversation` MODIFY `status` ENUM('open', 'closed') NOT NULL DEFAULT 'open';
