-- DropForeignKey
ALTER TABLE `flow_comments` DROP FOREIGN KEY `flow_comments_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `flow_likes` DROP FOREIGN KEY `flow_likes_userId_fkey`;

-- DropForeignKey
ALTER TABLE `flow_saves` DROP FOREIGN KEY `flow_saves_userId_fkey`;

-- DropForeignKey
ALTER TABLE `flow_shares` DROP FOREIGN KEY `flow_shares_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `flows` DROP FOREIGN KEY `flows_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `notifications` DROP FOREIGN KEY `notifications_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `password_reset_tokens` DROP FOREIGN KEY `password_reset_tokens_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `refresh_tokens` DROP FOREIGN KEY `refresh_tokens_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_flow_states` DROP FOREIGN KEY `user_flow_states_owner_user_id_fkey`;

-- DropIndex
DROP INDEX `flow_comments_user_id_fkey` ON `flow_comments`;

-- DropIndex
DROP INDEX `flow_likes_userId_fkey` ON `flow_likes`;

-- DropIndex
DROP INDEX `flow_saves_userId_fkey` ON `flow_saves`;

-- DropIndex
DROP INDEX `flow_shares_user_id_fkey` ON `flow_shares`;

-- DropIndex
DROP INDEX `flows_user_id_fkey` ON `flows`;

-- DropIndex
DROP INDEX `notifications_user_id_fkey` ON `notifications`;

-- DropIndex
DROP INDEX `password_reset_tokens_user_id_fkey` ON `password_reset_tokens`;

-- DropIndex
DROP INDEX `refresh_tokens_user_id_fkey` ON `refresh_tokens`;

-- DropIndex
DROP INDEX `user_flow_states_owner_user_id_fkey` ON `user_flow_states`;

-- AddForeignKey
ALTER TABLE `refresh_tokens` ADD CONSTRAINT `refresh_tokens_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `password_reset_tokens` ADD CONSTRAINT `password_reset_tokens_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flows` ADD CONSTRAINT `flows_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_flow_states` ADD CONSTRAINT `user_flow_states_owner_user_id_fkey` FOREIGN KEY (`owner_user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_shares` ADD CONSTRAINT `flow_shares_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_comments` ADD CONSTRAINT `flow_comments_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_likes` ADD CONSTRAINT `flow_likes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_saves` ADD CONSTRAINT `flow_saves_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
