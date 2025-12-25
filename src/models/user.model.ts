import { Provider, Role } from '@prisma/client';
import bcrypt from 'bcrypt';
import { prisma } from '~/config/prisma';

export interface IUser {
    id: string;
    username: string;
    displayName?: string | null;
    email: string;
    password: string;
    role: Role;
    provider: Provider;
    providerId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}

class UserModel {
    async findByEmailOrUsername(email: string, username: string): Promise<IUser | null> {
        return prisma.user.findFirst({
            where: { OR: [{ email }, { username }] }
        });
    }

    async createUser(data: {
        username: string;
        email: string;
        password: string;
        displayName?: string;
        role?: Role;
        provider?: Provider;
        providerId?: string;
    }) {
        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await prisma.user.create({
            data: { ...data, password: hashedPassword }
        });

        return user;
    }

    async findByProvider(provider: Provider, providerId: string) {
        return prisma.user.findFirst({
            where: { provider, providerId }
        });
    }

    async findByEmail(email: string) {
        return prisma.user.findFirst({
            where: { email }
        });
    }

    async findById(id: string) {
        return prisma.user.findFirst({
            where: { id }
        });
    }

    async updatePassword(email: string, hashedPassword: string) {
        return prisma.user.update({
            where: { email: email },
            data: { password: hashedPassword }
        });
    }
}

export default new UserModel();
