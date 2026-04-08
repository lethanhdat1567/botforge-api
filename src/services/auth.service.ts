import { prisma } from '~/config/prisma';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { generateAccessToken } from '~/utils/jwt';
import { envConfig } from '~/config/envConfig';
import ms, { StringValue } from 'ms';
import { authCode } from '~/constants/auth';
import { TokenType, User } from '@prisma/client';
import notificationService from '~/services/notification.service';
import { firebaseAdmin } from '~/config/firebase';

class AuthService {
    async getMe(userId: string) {
    const user = await prisma.user.findFirst({
        where: {
            id: userId
        },
        select: {
            id: true,
            username: true,
            displayName: true,
            avatar: true,
            email: true,
            createdAt: true,
            updatedAt: true,
            googleProviderId: true,
            password: true
        }
    });

    if (!user) return null;

    const hasPassword = !!user.password;
    const isGoogleAccount = !!user.googleProviderId;

    const { password,googleProviderId, ...userWithoutPassword } = user;

    return {
        ...userWithoutPassword,
        isSocialAccount: isGoogleAccount && !hasPassword
    };
}

    async register(displayName: string, email: string, password: string) {
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
                password: hashPassword,
                displayName
            }
        });

        notificationService.notifyNewUser(user.email, user.id);

        return user;
    }

    async login(email: string, password: string) {
        const user = await prisma.user.findFirst({ where: { email } });

        if (!user) return ['User not found', null];

        if (user && !user.password) return [authCode.loginConfig, null];

        const isMatch = await bcrypt.compare(password, user.password as string);

        if (!isMatch) return ['Password is incorrect', null];

        const result = await this.getAuthResponse(user);

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
        const expiresIn = 2 * 60 * 60;
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

    async logout(refreshToken: string) {
        await prisma.verificationToken.deleteMany({
            where: {
                token: refreshToken,
                type: 'refresh_token'
            }
        });

        return;
    }

    async refreshToken(refreshToken: string) {
        const payload = await prisma.verificationToken.findFirst({
            where: {
                token: refreshToken,
                type: 'refresh_token'
            }
        });

        if (!payload) return ['Token not found', null];

        if (payload.expiresAt < new Date()) {
            await prisma.verificationToken.delete({
                where: {
                    id: payload.id
                }
            });

            return ['Token expired', null];
        }

        const user = await prisma.user.findFirst({ where: { id: payload.userId } });
        if (!user) return ['User not found', null];

        const tokenPayload = {
            id: user.id,
            role: user.role
        };

        const accessToken = await generateAccessToken(tokenPayload);
        const accessTokenExpiresIn = ms(envConfig.jwt.accessExpires as StringValue) / 1000;

        return [
            null,
            {
                accessToken,
                accessTokenExpiresIn
            }
        ];
    }

    async generateToken(userId: string, role: 'admin' | 'user') {
        const payload = { id: userId, role };

        const accessToken = generateAccessToken(payload);
        const refreshToken = crypto.randomBytes(32).toString('hex');
        const accessTokenExpiresIn = ms(envConfig.jwt.accessExpires as StringValue) / 1000;
        const refreshTokenExpiresIn = ms(envConfig.jwt.refreshExpires as StringValue) / 1000;

        await prisma.verificationToken.create({
            data: {
                userId,
                token: refreshToken,
                type: 'refresh_token',
                expiresAt: new Date(Date.now() + refreshTokenExpiresIn * 1000)
            }
        });

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
    async googleLogin(idToken: string) {
        try {
            const decoded = await firebaseAdmin.auth().verifyIdToken(idToken, true);

            if (decoded.firebase?.sign_in_provider !== 'google.com') {
                return ['Chỉ hỗ trợ đăng nhập Google qua Firebase', null];
            }

            let googleId = decoded.firebase?.identities?.['google.com']?.[0];
            if (!googleId) {
                const userRecord = await firebaseAdmin.auth().getUser(decoded.uid);
                googleId =
                    userRecord.providerData.find((p) => p.providerId === 'google.com')?.uid ?? undefined;
            }

            if (!googleId) return ['Không xác định được tài khoản Google', null];

            const email = decoded.email;
            if (!email) return ['Token không chứa email', null];

            const name = decoded.name;
            const picture = decoded.picture;

            let user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                user = await prisma.user.create({
                    data: {
                        email: email!,
                        displayName: name || 'User',
                        avatar: picture,
                        googleProviderId: googleId,
                        verifyAt: new Date()
                    }
                });
            } else {
                if (user.googleProviderId && user.googleProviderId !== googleId) {
                    return ['Email này đã được liên kết với một tài khoản Google khác', null];
                }

                user = await prisma.user.update({
                    where: { id: user.id },
                    data: {
                        googleProviderId: googleId,
                        verifyAt: user.verifyAt || new Date(),
                        avatar: user.avatar || picture
                    }
                });
            }

            const systemTokens = await this.getAuthResponse(user);
            return [null, systemTokens];
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : String(error);
            console.error('Firebase Google login error:', message);
            return ['Xác thực Google thất bại', null];
        }
    }
}

export default new AuthService();
