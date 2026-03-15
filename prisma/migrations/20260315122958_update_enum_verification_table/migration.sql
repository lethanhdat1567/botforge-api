-- AlterTable
ALTER TABLE `verification_tokens` MODIFY `type` ENUM('verify_email', 'reset_password', 'refresh_token') NOT NULL;
