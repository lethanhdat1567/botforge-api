import { prisma } from '~/config/prisma';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { generateAccessToken, generateRefreshToken } from '~/utils/jwt';
import { envConfig } from '~/config/envConfig';
import ms, { StringValue } from 'ms';
import { authCode } from '~/constants/auth';
import { TokenType, User } from '~/generated/prisma';

class AuthService {
    async register(email: string, password: string) {
        const hashPassword = await bcrypt.hash(password, 10);

        // Check user login with google
        const exitUser = await prisma.user.findFirst({ where: { email } });
        if (exitUser && exitUser.googleProviderId) {
            await prisma.user.update({
                where: {
                    id: exitUser.id
                },
                data: {
                    password: hashPassword
                }
            });

            return exitUser;
        }

        const user = await prisma.user.create({
            data: {
                email,
                password: hashPassword
            }
        });

        return user;
    }

    async login(email: string, password: string) {
        const user = await prisma.user.findFirst({ where: { email } });

        if (!user) return ['User not found', null];

        if (user && !user.password) return [authCode.loginConfig, null];

        const isMatch = await bcrypt.compare(password, user.password as string);

        if (!isMatch) return ['Password is incorrect', null];

        const result = await this.getAuthResponse(user);
        console.log(result);

        return [null, result];
    }

    async forgotPassword(email: string) {
        const user = await prisma.user.findFirst({ where: { email } });

        if (!user) return ['User not found', null];

        const verifyResult = await this.createVerifyToken(user.id, user.email, 'reset_password');

        return [null, verifyResult.token];
    }

    async createVerifyToken(userId: string, email: string, type: TokenType) {
        const token = crypto.randomBytes(32).toString('hex');
        const expiresIn = 2 * 60 * 60; // 2 hours
        const expiresAt = new Date(Date.now() + expiresIn * 1000);

        const result = await prisma.verificationToken.create({
            data: {
                userId,
                token,
                email,
                expiresAt,
                type
            }
        });

        return result;
    }

    async verifyToken(token: string, type: TokenType) {
        const verifyEmail = await prisma.verificationToken.findFirst({
            where: {
                token,
                type
            }
        });

        if (!verifyEmail) return ['Token not found', null];

        if (verifyEmail.expiresAt < new Date()) return ['Token expired', null];

        if (type === 'verify_email') {
            await prisma.user.update({
                where: {
                    id: verifyEmail.userId
                },
                data: {
                    verifyAt: new Date()
                }
            });
        }

        await prisma.verificationToken.delete({
            where: {
                id: verifyEmail.id
            }
        });
        const user = await prisma.user.findFirst({ where: { id: verifyEmail.userId } });

        const result = await this.getAuthResponse(user as User);

        return [null, result];
    }

    async resetPassword(userId: string, newPassword: string) {
        const hashPassword = await bcrypt.hash(newPassword, 10);

        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                password: hashPassword
            }
        });
    }

    async generateToken(userId: string, role: 'admin' | 'user') {
        const payload = { userId, role };

        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);
        const accessTokenExpiresIn = ms(envConfig.jwt.accessExpires as StringValue) / 1000;

        return {
            accessToken,
            refreshToken,
            accessTokenExpiresIn
        };
    }

    async getAuthResponse(user: User) {
        const token = await this.generateToken(user.id, user.role);
        const userResult = {
            id: user.id,
            email: user.email,
            role: user.role
        };

        return {
            user: userResult,
            ...token
        };
    }
}

export default new AuthService();
