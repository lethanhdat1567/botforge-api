import { User } from '@prisma/client';

export interface VerifyEmailPayload {
    user: User;
    token: string;
}
