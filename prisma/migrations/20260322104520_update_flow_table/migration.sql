-- AlterTable
ALTER TABLE `flows` MODIFY `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'inactive';
