import { User } from '@prisma/client';
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
}

export const emailService = new EmailService();
