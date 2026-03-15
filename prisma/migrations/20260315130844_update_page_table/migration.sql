/*
  Warnings:

  - You are about to drop the column `access_token` on the `pages` table. All the data in the column will be lost.
  - You are about to drop the column `platform` on the `pages` table. All the data in the column will be lost.
  - The values [revoked,expired] on the enum `pages_status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `password_reset_tokens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `refresh_tokens` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `page_access_token` to the `pages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `password_reset_tokens` DROP FOREIGN KEY `password_reset_tokens_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `refresh_tokens` DROP FOREIGN KEY `refresh_tokens_user_id_fkey`;

-- DropIndex
DROP INDEX `pages_platform_page_uid_key` ON `pages`;

-- AlterTable
ALTER TABLE `pages` DROP COLUMN `access_token`,
    DROP COLUMN `platform`,
    ADD COLUMN `page_access_token` TEXT NOT NULL,
    MODIFY `status` ENUM('active', 'inactive', 'isExpired') NOT NULL DEFAULT 'active';

-- AlterTable
ALTER TABLE `verification_tokens` MODIFY `token` VARCHAR(255) NOT NULL,
    MODIFY `email` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `password_reset_tokens`;

-- DropTable
DROP TABLE `refresh_tokens`;
