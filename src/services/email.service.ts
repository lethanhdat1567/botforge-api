import { User } from '~/generated/prisma';
import { envConfig } from '~/config/envConfig';
import { sendEmail } from '~/config/mailer';

class EmailService {
    async sendVerifyEmail(user: User, token: string) {
        await sendEmail(
            user.email,
            'Verify Your Email',
            `<p>Click <a href="${envConfig.frontendUrl}/verify-email?token=${token}">here</a> to verify your email.</p>`
        );
    }

    async sendResetPassword(email: string, token: string) {
        await sendEmail(
            email,
            'Reset Your Password',
            `<p>You requested a password reset. Click <a href="${envConfig.frontendUrl}/reset-password?token=${token}">here</a> to set a new password.</p>`
        );
    }
}

export const emailService = new EmailService();
