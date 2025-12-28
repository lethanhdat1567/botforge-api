-- DropForeignKey
ALTER TABLE `flow_comments` DROP FOREIGN KEY `flow_comments_flow_share_id_fkey`;

-- DropForeignKey
ALTER TABLE `flow_comments` DROP FOREIGN KEY `flow_comments_parent_id_fkey`;

-- DropForeignKey
ALTER TABLE `flow_likes` DROP FOREIGN KEY `flow_likes_flowShareId_fkey`;

-- DropForeignKey
ALTER TABLE `flow_saves` DROP FOREIGN KEY `flow_saves_flowShareId_fkey`;

-- DropIndex
DROP INDEX `flow_comments_flow_share_id_fkey` ON `flow_comments`;

-- DropIndex
DROP INDEX `flow_comments_parent_id_fkey` ON `flow_comments`;

-- AlterTable
ALTER TABLE `flow_shares` ADD COLUMN `thumbnail` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `flow_comments` ADD CONSTRAINT `flow_comments_flow_share_id_fkey` FOREIGN KEY (`flow_share_id`) REFERENCES `flow_shares`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_comments` ADD CONSTRAINT `flow_comments_parent_id_fkey` FOREIGN KEY (`parent_id`) REFERENCES `flow_comments`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_likes` ADD CONSTRAINT `flow_likes_flowShareId_fkey` FOREIGN KEY (`flowShareId`) REFERENCES `flow_shares`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_saves` ADD CONSTRAINT `flow_saves_flowShareId_fkey` FOREIGN KEY (`flowShareId`) REFERENCES `flow_shares`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
