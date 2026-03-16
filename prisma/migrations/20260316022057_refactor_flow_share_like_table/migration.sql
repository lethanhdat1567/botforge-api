/*
  Warnings:

  - You are about to drop the `flow_likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `flow_likes` DROP FOREIGN KEY `flow_likes_flowShareId_fkey`;

-- DropForeignKey
ALTER TABLE `flow_likes` DROP FOREIGN KEY `flow_likes_userId_fkey`;

-- DropTable
DROP TABLE `flow_likes`;

-- CreateTable
CREATE TABLE `flow_share_likes` (
    `id` VARCHAR(191) NOT NULL,
    `flowShareId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `flow_share_likes_flowShareId_userId_key`(`flowShareId`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flow_share_likes` ADD CONSTRAINT `flow_share_likes_flowShareId_fkey` FOREIGN KEY (`flowShareId`) REFERENCES `flow_shares`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_share_likes` ADD CONSTRAINT `flow_share_likes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
