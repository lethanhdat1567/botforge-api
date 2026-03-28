-- CreateTable
CREATE TABLE `anonymous_participants` (
    `id` VARCHAR(191) NOT NULL,
    `display_name` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AlterTable
ALTER TABLE `Conversation` ADD COLUMN `anonymous_participant_id` VARCHAR(191) NULL;

CREATE INDEX `Conversation_anonymous_participant_id_idx` ON `Conversation`(`anonymous_participant_id`);

-- AddForeignKey
ALTER TABLE `Conversation` ADD CONSTRAINT `Conversation_anonymous_participant_id_fkey` FOREIGN KEY (`anonymous_participant_id`) REFERENCES `anonymous_participants`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE `Message` ADD COLUMN `sender_user_id` VARCHAR(191) NULL,
    ADD COLUMN `sender_anonymous_id` VARCHAR(191) NULL;

CREATE INDEX `Message_sender_user_id_idx` ON `Message`(`sender_user_id`);
CREATE INDEX `Message_sender_anonymous_id_idx` ON `Message`(`sender_anonymous_id`);

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_sender_user_id_fkey` FOREIGN KEY (`sender_user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_sender_anonymous_id_fkey` FOREIGN KEY (`sender_anonymous_id`) REFERENCES `anonymous_participants`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
