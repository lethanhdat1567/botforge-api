-- AlterTable
ALTER TABLE `flow_share_dowloads` ADD COLUMN `cloned_flow_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `flow_share_dowloads_cloned_flow_id_idx` ON `flow_share_dowloads`(`cloned_flow_id`);

-- AddForeignKey
ALTER TABLE `flow_share_dowloads` ADD CONSTRAINT `flow_share_dowloads_cloned_flow_id_fkey` FOREIGN KEY (`cloned_flow_id`) REFERENCES `flows`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
