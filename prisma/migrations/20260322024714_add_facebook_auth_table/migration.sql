-- CreateTable
CREATE TABLE `facebook_auths` (
    `id` VARCHAR(191) NOT NULL,
    `facebook_provider_id` VARCHAR(191) NOT NULL,
    `fb_access_token` TEXT NOT NULL,
    `fb_token_expires_at` DATETIME(3) NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `facebook_auths_facebook_provider_id_key`(`facebook_provider_id`),
    UNIQUE INDEX `facebook_auths_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `facebook_auths` ADD CONSTRAINT `facebook_auths_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
