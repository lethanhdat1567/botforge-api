import { Request } from 'express';
import UserModel from '~/models/user.model';
import refreshTokenModel from '~/models/refreshToken.model';
import { generateAccessToken, generateRefreshToken } from '~/utils/jwt';
import { getExpiresAt, parseDuration } from '~/utils/time';
import bcrypt from 'bcrypt';
import { authCode } from '~/constants/auth';
import {
    forgotPasswordSchema,
    loginSchema,
    refreshTokenSchema,
    registerSchema,
    resetPasswordSchema
} from '~/schema/auth.schema';
import { AuthRequest } from '~/middlewares/auth.middleware';
import passwordResetTokenModel from '~/models/passwordResetToken.model';
import { sendEmail } from '~/config/mailer';
import { createNewUserNotification } from '~/helpers/notification-helper';
import { formatZodErrors } from '~/helpers/auth-helper';
import flowFallbackModel from '~/models/flow-fallback.model';

class AuthController {
    async register(req: Request, res: any) {
        try {
            const parseResult = registerSchema.safeParse(req.body);

            if (!parseResult.success) {
                const errors = formatZodErrors(parseResult.error.issues);
                return res.error({ errors }, 400);
            }

            const { username, email, password, displayName } = parseResult.data;

            // Kiểm tra user tồn tại
            const existingUser = await UserModel.findByEmailOrUsername(email, username);
            if (existingUser) {
                const errors = [];
                if (existingUser.username === username) {
                    errors.push({
                        field: 'username',
                        message: 'Username already exists',
                        code: authCode.FIELD_ALREADY_EXISTS
                    });
                }
                if (existingUser.email === email) {
                    errors.push({
                        field: 'email',
                        message: 'Email already exists',
                        code: authCode.FIELD_ALREADY_EXISTS
                    });
                }
                return res.error({ errors, code: authCode.FIELD_ALREADY_EXISTS }, 409);
            }

            // Tạo user
            const user = await UserModel.createUser({ username, email, password, displayName });
            const { password: _, ...userWithoutPassword } = user;
            // Tạo tokens
            const tokenPayload = { userId: user.id, role: user.role };
            const accessToken = generateAccessToken(tokenPayload);
            const refreshToken = generateRefreshToken(tokenPayload);

            const accessTokenExpiresIn = parseDuration(process.env.ACCESS_EXPIRES || '1h');
            const refreshTokenExpiresAt = getExpiresAt(process.env.REFRESH_EXPIRES || '7d');

            await refreshTokenModel.create(refreshToken, user.id, refreshTokenExpiresAt);
            await createNewUserNotification(user.id, displayName as string, user.avatar);

            await flowFallbackModel.upsert(user.id, {
                timeoutDuration: 5,
                timeoutUnit: 'minute',
                fallbackMessage: 'Xin lỗi, mình chưa hiểu. Bạn có thể thử lại không?'
            });

            return res.success(
                {
                    user: userWithoutPassword,
                    token: {
                        access_token: accessToken,
                        expired_in: accessTokenExpiresIn,
                        refresh_token: refreshToken
                    }
                },
                201
            );
        } catch (error) {
            console.error('Register error:', error);
            return res.error(
                {
                    errors: [{ field: 'server', message: 'Internal server error', code: authCode.SERVER_ERROR }]
                },
                500
            );
        }
    }

    async login(req: Request, res: any) {
        try {
            // 1️⃣ Validate request
            const parseResult = loginSchema.safeParse(req.body);

            if (!parseResult.success) {
                const errors = formatZodErrors(parseResult.error.issues);
                return res.error({ errors }, 400);
            }

            const { emailOrUsername, password } = parseResult.data;

            // 2️⃣ Tìm user theo email hoặc username
            const user = await UserModel.findByEmailOrUsername(emailOrUsername, emailOrUsername);
            if (!user) {
                return res.error(
                    {
                        errors: [
                            {
                                field: 'emailOrUsername',
                                message: 'Email hoặc tên đăng nhập không tồn tại',
                                code: authCode.USER_NOT_FOUND
                            }
                        ]
                    },
                    401
                );
            }

            // 3️⃣ Kiểm tra password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.error(
                    {
                        errors: [
                            {
                                field: 'password',
                                message: 'Mật khẩu không chính xác',
                                code: authCode.INVALID_PASSWORD
                            }
                        ]
                    },
                    401
                );
            }

            // 4️⃣ Tạo token
            const tokenPayload = { userId: user.id, role: user.role };
            const accessToken = generateAccessToken(tokenPayload);
            const refreshToken = generateRefreshToken(tokenPayload);

            const accessTokenExpiresIn = parseDuration(process.env.ACCESS_EXPIRES || '1h');
            const refreshTokenExpiresAt = getExpiresAt(process.env.REFRESH_EXPIRES || '7d');

            // Lưu refresh token
            await refreshTokenModel.create(refreshToken, user.id, refreshTokenExpiresAt);
            const { password: _, ...userWithoutPassword } = user;
            // 5️⃣ Trả về response
            return res.success(
                {
                    user: userWithoutPassword,
                    token: {
                        access_token: accessToken,
                        expired_in: accessTokenExpiresIn,
                        refresh_token: refreshToken
                    }
                },
                200
            );
        } catch (error) {
            console.error('Login error:', error);
            return res.error(
                {
                    errors: [
                        {
                            field: 'server',
                            message: 'Internal server error',
                            code: authCode.SERVER_ERROR
                        }
                    ]
                },
                500
            );
        }
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

    async forgotPassword(req: Request, res: any) {
        try {
            const parseResult = forgotPasswordSchema.safeParse(req.body);
            if (!parseResult.success) {
                const errors = formatZodErrors(parseResult.error.issues);
                return res.error({ errors }, 400);
            }

            const { email } = parseResult.data;
            const user = await UserModel.findByEmail(email);

            if (!user) {
                // Không reveal user tồn tại hay không
                return res.success({ message: 'If your email exists, you will receive a reset link.' });
            }

            const expiresAt = new Date(Date.now() + parseDuration('1h')); // token 1h
            const tokenRecord = await passwordResetTokenModel.create(user.id, expiresAt);

            const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${tokenRecord.token}`;

            await sendEmail(
                user.email,
                'Reset Your Password',
                `<p>Click <a href="${resetLink}">here</a> to reset your password. The link expires in 1 hour.</p>`
            );

            return res.success({ message: 'If your email exists, you will receive a reset	 link.' });
        } catch (error) {
            console.error('Forgot password error:', error);
            return res.error(error);
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

    async resetPassword(req: Request, res: any) {
        try {
            // Validate input
            const parseResult = resetPasswordSchema.safeParse(req.body);
            if (!parseResult.success) {
                const errors = formatZodErrors(parseResult.error.issues);
                return res.error({ errors }, 400);
            }

            const { newPassword } = parseResult.data;

            // Hash new password
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            const tokenRecord = await passwordResetTokenModel.findByToken(req.query.token as string);
            if (!tokenRecord) {
                return res.error({ message: 'Token not found', code: authCode.INVALID_TOKEN }, 404);
            }

            // Update user password
            await UserModel.update(tokenRecord.userId, { password: hashedPassword });

            return res.success({ message: 'Password successfully reset' }, 200);
        } catch (error) {
            console.error('Reset password error:', error);
            return res.error(error);
        }
    }
}

export default new AuthController();
