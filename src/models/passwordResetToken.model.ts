import { prisma } from '~/config/prisma';
import { v4 as uuidv4 } from 'uuid';

class PasswordResetTokenModel {
    async create(userId: string, expiresAt: Date) {
        const token = uuidv4();
        return prisma.passwordResetToken.create({
            data: { token, userId, expiresAt }
        });
    }

    async findByToken(token: string) {
        return prisma.passwordResetToken.findUnique({
            where: { token },
            include: { user: true }
        });
    }

    async delete(token: string) {
        return prisma.passwordResetToken.delete({
            where: { token }
        });
    }

    async deleteByUserId(userId: string) {
        return prisma.passwordResetToken.deleteMany({
            where: { userId }
        });
    }
}

export default new PasswordResetTokenModel();
