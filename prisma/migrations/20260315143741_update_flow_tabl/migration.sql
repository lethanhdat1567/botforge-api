/*
  Warnings:

  - You are about to drop the column `folder_id` on the `flows` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `flows` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(6))` to `Enum(EnumId(2))`.
  - You are about to drop the `folders` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `timeout_duration` on table `flows` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `flows` DROP FOREIGN KEY `flows_folder_id_fkey`;

-- DropForeignKey
ALTER TABLE `folders` DROP FOREIGN KEY `folders_user_id_fkey`;

-- DropIndex
DROP INDEX `flows_folder_id_fkey` ON `flows`;

-- AlterTable
ALTER TABLE `flows` DROP COLUMN `folder_id`,
    MODIFY `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
    MODIFY `timeout_duration` VARCHAR(191) NOT NULL DEFAULT '10s';

-- DropTable
DROP TABLE `folders`;
