import { User } from '~/generated/prisma';

export interface VerifyEmailPayload {
    user: User;
    token: string;
}

export interface SendResetPasswordPayload {
    email: string;
    token: string;
}
