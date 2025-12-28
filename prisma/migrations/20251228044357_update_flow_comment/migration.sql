/*
  Warnings:

  - You are about to drop the `flow_ratings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `flow_ratings` DROP FOREIGN KEY `flow_ratings_flow_share_id_fkey`;

-- DropForeignKey
ALTER TABLE `flow_ratings` DROP FOREIGN KEY `flow_ratings_user_id_fkey`;

-- DropTable
DROP TABLE `flow_ratings`;

-- CreateTable
CREATE TABLE `flow_likes` (
    `id` VARCHAR(191) NOT NULL,
    `flowShareId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `flow_likes_flowShareId_userId_key`(`flowShareId`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `flow_saves` (
    `id` VARCHAR(191) NOT NULL,
    `flowShareId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `flow_saves_flowShareId_userId_key`(`flowShareId`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `flow_likes` ADD CONSTRAINT `flow_likes_flowShareId_fkey` FOREIGN KEY (`flowShareId`) REFERENCES `flow_shares`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_likes` ADD CONSTRAINT `flow_likes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_saves` ADD CONSTRAINT `flow_saves_flowShareId_fkey` FOREIGN KEY (`flowShareId`) REFERENCES `flow_shares`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `flow_saves` ADD CONSTRAINT `flow_saves_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
