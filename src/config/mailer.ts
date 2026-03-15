import nodemailer from 'nodemailer';
import { envConfig } from '~/config/envConfig';

const transporter = nodemailer.createTransport({
    host: envConfig.mail.host,
    port: Number(envConfig.mail.port),
    secure: Number(envConfig.mail.port) === 465,
    auth: {
        user: envConfig.mail.user,
        pass: envConfig.mail.password
    }
});

export const sendEmail = async (to: string, subject: string, html: string) => {
    const info = await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to,
        subject,
        html
    });

    console.log(`Mail send: ${info.messageId}`);
};
