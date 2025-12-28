-- AlterTable
ALTER TABLE `flow_shares` ADD COLUMN `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active';
