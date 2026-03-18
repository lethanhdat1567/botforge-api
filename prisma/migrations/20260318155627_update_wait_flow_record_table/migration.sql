/*
  Warnings:

  - You are about to alter the column `waiting_for_variable` on the `flow_records` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `flow_records` MODIFY `variables` JSON NULL,
    MODIFY `waiting_for_variable` JSON NULL;
