/*
  Warnings:

  - You are about to drop the `flow_saves` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `flow_saves` DROP FOREIGN KEY `flow_saves_flowShareId_fkey`;

-- DropForeignKey
ALTER TABLE `flow_saves` DROP FOREIGN KEY `flow_saves_userId_fkey`;

-- DropTable
DROP TABLE `flow_saves`;

-- CreateTable
CREATE TABLE `flow_share_saves` (
    `id` VARCHAR(191) NOT NULL,
    `flowShareId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `flow_share_saves_flowShareId_userId_key`(`flowShareId`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flow_share_saves` ADD CONSTRAINT `flow_share_saves_flowShareId_fkey` FOREIGN KEY (`flowShareId`) REFERENCES `flow_shares`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_share_saves` ADD CONSTRAINT `flow_share_saves_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
