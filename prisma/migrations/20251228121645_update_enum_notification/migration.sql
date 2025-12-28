/*
  Warnings:

  - The values [rating] on the enum `notifications_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `notifications` MODIFY `type` ENUM('comment', 'reply', 'download', 'flow_done', 'flow_cancelled', 'new_user', 'chat_message') NOT NULL;
