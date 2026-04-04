-- Remove rows using deprecated notification types (none expected in dev)
DELETE FROM `notifications` WHERE `type` IN ('flow_done', 'flow_cancelled');

-- AlterTable
ALTER TABLE `notifications` MODIFY `type` ENUM('comment', 'reply', 'download', 'new_user', 'chat_message') NOT NULL;
