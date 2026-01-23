-- DropForeignKey
ALTER TABLE `flows` DROP FOREIGN KEY `flows_page_id_fkey`;

-- DropIndex
DROP INDEX `flows_page_id_fkey` ON `flows`;

-- AlterTable
ALTER TABLE `flows` MODIFY `page_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `flows` ADD CONSTRAINT `flows_page_id_fkey` FOREIGN KEY (`page_id`) REFERENCES `pages`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
