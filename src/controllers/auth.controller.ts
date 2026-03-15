import { Request } from 'express';
import UserModel from '~/models/user.model';
import refreshTokenModel from '~/models/refreshToken.model';
import { generateAccessToken, generateRefreshToken } from '~/utils/jwt';
import { getExpiresAt, parseDuration } from '~/utils/time';
import bcrypt from 'bcrypt';
import { authCode } from '~/constants/auth';
import { forgotPasswordSchema, loginSchema, refreshTokenSchema, resetPasswordSchema } from '~/schema/auth.schema';
import { AuthRequest } from '~/middlewares/auth.middleware';
import passwordResetTokenModel from '~/models/passwordResetToken.model';
import { sendEmail } from '~/config/mailer';
import { createNewUserNotification } from '~/helpers/notification-helper';
import { formatZodErrors } from '~/helpers/auth-helper';
import flowFallbackModel from '~/models/flow-fallback.model';
import authService from '~/services/auth.service';
import { envConfig } from '~/config/envConfig';
import { httpCode } from '~/constants/httpsCode';
import { User } from '~/generated/prisma';

class AuthController {
    async register(req: Request, res: any) {
        const { email, password } = req.body;

        const user = await authService.register(email, password);
        const userEmailToken = await authService.createVerifyToken(user.id, user.email, 'verify_email');

        await sendEmail(
            user.email,
            'Verify Your Email',
            `<p>Click <a href="${envConfig.frontendUrl}/verify-email?token=${userEmailToken.token}">here</a> to verify your email.</p>`
        );

        return res.success({
            message: 'Register successfully, please check your email to verify'
        });
    }

    async verifyEmail(req: Request, res: any) {
        const { token } = req.body;

        const [error, result] = await authService.verifyToken(token, 'verify_email');

        if (error) {
            return res.error({ message: 'Invalid or expired verification token.' }, httpCode.clientError.unauthorized);
        }

        return res.success(result);
    }

    async login(req: Request, res: any) {
        const { email, password } = req.body;

        const [error, data] = await authService.login(email, password);

        if (error) {
            if (error === authCode.loginConfig) {
                return res.error(
                    "This email is already linked with Google. To set a password, please use the 'Forgot Password' feature.",
                    httpCode.clientError.conflict
                );
            }

            return res.error({ message: error }, httpCode.clientError.unauthorized);
        }

        return res.success(data);
    }

    async forgotPassword(req: Request, res: any) {
        const { email } = req.body;

        const [error, token] = await authService.forgotPassword(email);

        if (error || !token) return;

        await sendEmail(
            email,
            'Reset Your Password',
            `<p>You requested a password reset. Click <a href="${envConfig.frontendUrl}/reset-password?token=${token}">here</a> to set a new password.</p>
         `
        );

        return res.success({
            message: 'Please check your email to reset your password'
        });
    }

    async verifyResetPassword(req: Request, res: any) {
        const { token } = req.body;

        const [error, result] = await authService.verifyToken(token, 'reset_password');

        if (error) {
            return res.error({ message: 'Invalid or expired verification token.' }, httpCode.clientError.unauthorized);
        }

        return res.success({
            userId: (result as any).user.id
        });
    }

    async resetPassword(req: Request, res: any) {
        const { userId, newPassword } = req.body;

        await authService.resetPassword(userId, newPassword);

        return res.success({
            message: 'Password reset successfully'
        });
    }

    async refreshToken(req: Request, res: any) {
        try {
            // Validate input
            const parseResult = refreshTokenSchema.safeParse(req.body);
            if (!parseResult.success) {
                return res.error({ message: parseResult.error.issues[0].message }, 400);
            }

            const { refresh_token } = parseResult.data;

            // Kiểm tra token trong DB
            const tokenRecord = await refreshTokenModel.findByToken(refresh_token);
            if (!tokenRecord) {
                return res.error({ message: 'Refresh token not found', code: authCode.INVALID_TOKEN }, 401);
            }

            // Kiểm tra token còn hạn
            if (new Date() > tokenRecord.expiresAt) {
                // Xóa luôn token hết hạn
                await refreshTokenModel.delete(refresh_token);
                return res.error({ message: 'Refresh token expired', code: authCode.TOKEN_EXPIRED }, 401);
            }

            const user = tokenRecord.user;

            // Tạo access token mới
            const tokenPayload = { userId: user.id, role: user.role };
            const newAccessToken = generateAccessToken(tokenPayload);
            const accessTokenExpiresIn = parseDuration(process.env.ACCESS_EXPIRES || '1h');

            // Tạo refresh token mới
            const newRefreshToken = generateRefreshToken(tokenPayload);
            const newRefreshExpiresAt = getExpiresAt(process.env.REFRESH_EXPIRES || '7d');

            // Xóa token cũ và lưu token mới
            await refreshTokenModel.delete(refresh_token);
            await refreshTokenModel.create(newRefreshToken, user.id, newRefreshExpiresAt);

            return res.success(
                {
                    token: {
                        access_token: newAccessToken,
                        expired_in: accessTokenExpiresIn,
                        refresh_token: newRefreshToken
                    }
                },
                200
            );
        } catch (error) {
            console.error('Refresh token error:', error);
            return res.error(error);
        }
    }

    async logout(req: AuthRequest, res: any) {
        const userId = req?.user?.userId;

        if (userId) {
            await refreshTokenModel.deleteByUserId(userId);
        }

        return res.success({ message: 'Logged out successfully' });
    }

    async googleAuth(req: Request, res: any) {
        try {
            const { code } = req.body;

            if (!code) {
                return res.error({ message: 'Missing code' }, 400);
            }

            // 1️⃣ Đổi code → token
            const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    client_id: process.env.GOOGLE_CLIENT_ID!,
                    client_secret: process.env.GOOGLE_CLIENT_SECRET!,
                    redirect_uri: `${process.env.FRONTEND_URL}/auth/google/callback`,
                    grant_type: 'authorization_code',
                    code
                })
            });

            if (!tokenRes.ok) {
                throw new Error(await tokenRes.text());
            }

            const tokenData = await tokenRes.json();
            const { access_token } = tokenData;

            // 2️⃣ Lấy user info
            const userRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });

            if (!userRes.ok) {
                throw new Error(await userRes.text());
            }

            const ggUser = await userRes.json();

            const socialUser = {
                provider: 'google',
                providerId: ggUser.sub,
                email: ggUser.email,
                displayName: ggUser.name,
                avatar: ggUser.picture
            };

            let user = await UserModel.findByEmail(socialUser.email);

            if (user) {
                if (!user.providerId) {
                    return res.error(
                        {
                            message: 'This email is registered with password. Please sign in using email and password.',
                            code: authCode.LOCAL_ACCOUNT_ONLY
                        },
                        409
                    );
                }

                if (user.provider === 'google' && user.providerId !== socialUser.providerId) {
                    return res.error(
                        {
                            message:
                                'This email is registered with Google. Please sign in using the correct Google account.',
                            code: authCode.GOOGLE_ACCOUNT_MISMATCH
                        },
                        409
                    );
                }
            }

            if (!user) {
                user = await UserModel.createUser({
                    username: `google_${socialUser.providerId}`,
                    email: socialUser.email,
                    password: '',
                    displayName: socialUser.displayName,
                    provider: 'google',
                    providerId: socialUser.providerId,
                    avatar: socialUser.avatar,
                    role: 'user'
                });

                await createNewUserNotification(user.id, user.displayName || '', user.avatar);
                await flowFallbackModel.upsert(user.id, {
                    timeoutDuration: 5,
                    timeoutUnit: 'minute',
                    fallbackMessage: 'Xin lỗi, mình chưa hiểu. Bạn có thể thử lại không?'
                });
            }

            // 4️⃣ Tạo token hệ thống
            const payload = { userId: user.id, role: user.role };
            const accessToken = generateAccessToken(payload);
            const refreshToken = generateRefreshToken(payload);

            await refreshTokenModel.create(refreshToken, user.id, getExpiresAt(process.env.REFRESH_EXPIRES || '7d'));

            return res.success({
                user,
                token: {
                    access_token: accessToken,
                    refresh_token: refreshToken,
                    expired_in: parseDuration(process.env.ACCESS_EXPIRES || '1h')
                }
            });
        } catch (err) {
            console.error('Google auth error:', err);
            return res.error(err);
        }
    }

    async facebookAuth(req: Request, res: any) {
        try {
            const { code } = req.body;

            if (!code) {
                return res.error({ message: 'Missing code' }, 400);
            }

            // 1️⃣ Đổi code → access_token (Facebook)
            const tokenRes = await fetch(
                'https://graph.facebook.com/v19.0/oauth/access_token?' +
                    new URLSearchParams({
                        client_id: process.env.FACEBOOK_APP_ID!,
                        client_secret: process.env.FACEBOOK_APP_SECRET!,
                        redirect_uri: `${process.env.FRONTEND_URL}/auth/facebook/callback`,
                        code
                    })
            );

            if (!tokenRes.ok) {
                throw new Error(await tokenRes.text());
            }

            const tokenData = await tokenRes.json();
            const { access_token } = tokenData;

            // 2️⃣ Lấy user info
            const userRes = await fetch(
                'https://graph.facebook.com/me?' +
                    new URLSearchParams({
                        fields: 'id,name,email,picture',
                        access_token
                    })
            );

            if (!userRes.ok) {
                throw new Error(await userRes.text());
            }

            const fbUser = await userRes.json();

            // ❗ Facebook có thể KHÔNG trả email
            if (!fbUser.email) {
                return res.error(
                    {
                        message: 'Facebook account does not have an email address.',
                        code: authCode.EMAIL_REQUIRED
                    },
                    400
                );
            }

            const socialUser = {
                provider: 'facebook',
                providerId: fbUser.id,
                email: fbUser.email,
                displayName: fbUser.name,
                avatar: fbUser.picture?.data?.url
            };

            // 3️⃣ Tìm user theo email
            let user = await UserModel.findByEmail(socialUser.email);

            if (user) {
                // ❌ Local account
                if (!user.providerId) {
                    return res.error(
                        {
                            message: 'This email is registered with password. Please sign in using email and password.',
                            code: authCode.LOCAL_ACCOUNT_ONLY
                        },
                        409
                    );
                }

                // ❌ Facebook account mismatch
                if (user.provider === 'facebook' && user.providerId !== socialUser.providerId) {
                    return res.error(
                        {
                            message:
                                'This email is registered with Facebook. Please sign in using the correct Facebook account.',
                            code: authCode.FACEBOOK_ACCOUNT_MISMATCH
                        },
                        409
                    );
                }
            }

            // 4️⃣ Tạo user nếu chưa tồn tại
            if (!user) {
                user = await UserModel.createUser({
                    username: `facebook_${socialUser.providerId}`,
                    email: socialUser.email,
                    password: '', // ❗ không dùng ''
                    displayName: socialUser.displayName,
                    provider: 'facebook',
                    providerId: socialUser.providerId,
                    avatar: socialUser.avatar,
                    role: 'user'
                });

                await createNewUserNotification(user.id, user.displayName || '', user.avatar);
                await flowFallbackModel.upsert(user.id, {
                    timeoutDuration: 5,
                    timeoutUnit: 'minute',
                    fallbackMessage: 'Xin lỗi, mình chưa hiểu. Bạn có thể thử lại không?'
                });
            }

            // 5️⃣ Tạo token hệ thống
            const payload = { userId: user.id, role: user.role };
            const accessToken = generateAccessToken(payload);
            const refreshToken = generateRefreshToken(payload);

            await refreshTokenModel.create(refreshToken, user.id, getExpiresAt(process.env.REFRESH_EXPIRES || '7d'));

            return res.success({
                user,
                token: {
                    access_token: accessToken,
                    refresh_token: refreshToken,
                    expired_in: parseDuration(process.env.ACCESS_EXPIRES || '1h')
                }
            });
        } catch (err) {
            console.error('Facebook auth error:', err);
            return res.error(err);
        }
    }

    async checkResetToken(req: Request, res: any) {
        try {
            const { token } = req.query;

            if (!token || typeof token !== 'string') {
                return res.error({ message: 'Token missing' }, 400);
            }

            const tokenRecord = await passwordResetTokenModel.findByToken(token);

            if (!tokenRecord) {
                return res.error({ message: 'Token not found', code: authCode.INVALID_TOKEN }, 404);
            }

            if (tokenRecord.expiresAt < new Date()) {
                return res.error({ message: 'Token expired', code: authCode.TOKEN_EXPIRED }, 401);
            }

            // Lấy thông tin user
            const user = await UserModel.findById(tokenRecord.userId);

            return res.success(
                {
                    message: 'Token valid',
                    email: user?.email
                },
                200
            );
        } catch (error) {
            console.error('Check reset token error:', error);
            return res.error(error);
        }
    }
}

export default new AuthController();
