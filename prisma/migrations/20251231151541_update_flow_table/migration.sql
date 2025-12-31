-- AlterTable
ALTER TABLE `flows` MODIFY `logic_json` JSON NULL,
    MODIFY `layout_json` JSON NULL,
    MODIFY `page_access_token` TEXT NULL,
    MODIFY `page_id` VARCHAR(191) NULL;
