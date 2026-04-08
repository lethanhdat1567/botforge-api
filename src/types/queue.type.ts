import { User } from '@prisma/client';

export interface VerifyEmailPayload {
    user: User;
    token: string;
}

export interface SendResetPasswordPayload {
    email: string;
    token: string;
}
