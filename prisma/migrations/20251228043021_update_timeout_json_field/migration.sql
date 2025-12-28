/*
  Warnings:

  - You are about to alter the column `timeout_json` on the `flows` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `flows` MODIFY `timeout_json` JSON NULL;
