import { prisma } from '~/config/prisma';

class RefreshTokenModel {
    /**
     * Tạo refresh token mới
     */
    async create(token: string, userId: string, expiresAt: Date) {
        return prisma.refreshToken.create({
            data: { token, userId, expiresAt }
        });
    }

    /**
     * Tìm token theo giá trị
     */
    async findByToken(token: string) {
        return prisma.refreshToken.findUnique({
            where: { token },
            include: { user: true }
        });
    }

    /**
     * Xóa token
     */
    async delete(token: string) {
        return prisma.refreshToken.delete({
            where: { token }
        });
    }

    /**
     * Xóa tất cả refresh token của 1 user (logout tất cả)
     */
    async deleteByUserId(userId: string) {
        return prisma.refreshToken.deleteMany({
            where: { userId }
        });
    }

    /**
     * Check token còn hiệu lực chưa
     */
    async isValid(token: string) {
        const rt = await this.findByToken(token);
        if (!rt) return false;
        return rt.expiresAt > new Date();
    }
}

export default new RefreshTokenModel();
