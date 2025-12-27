/*
  Warnings:

  - You are about to drop the column `last_interaction_at` on the `user_flow_states` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `user_flow_states` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(3))` to `Enum(EnumId(4))`.

*/
-- AlterTable
ALTER TABLE `user_flow_states` DROP COLUMN `last_interaction_at`,
    MODIFY `status` ENUM('running', 'pending', 'cancelled', 'completed') NOT NULL DEFAULT 'running',
    ALTER COLUMN `updated_at` DROP DEFAULT;
