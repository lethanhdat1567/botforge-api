-- AlterTable
ALTER TABLE `flow_records` MODIFY `status` ENUM('running', 'pending', 'processing', 'completed', 'cancelled', 'error') NOT NULL DEFAULT 'running';
