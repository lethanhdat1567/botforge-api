/*
  Warnings:

  - You are about to alter the column `status` on the `Conversation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(9))`.
  - Table name must match `20260317014223_update_conversation_table` (`Conversation`, not `conversation`) for Linux MySQL case-sensitive lower_case_table_names=0.

*/
-- AlterTable
ALTER TABLE `Conversation` MODIFY `status` ENUM('open', 'closed') NOT NULL DEFAULT 'open';
