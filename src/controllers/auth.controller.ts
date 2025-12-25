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

class AuthController {
    async register(req: Request, res: any) {
        try {
            const parseResult = registerSchema.safeParse(req.body);
            if (!parseResult.success) {
                return res.error({ message: parseResult.error.issues[0].message }, 400);
            }
            const { username, email, password, displayName } = parseResult.data;

            // Kiểm tra user tồn tại
            const existingUser = await UserModel.findByEmailOrUsername(email, username);
            if (existingUser) {
                return res.error(
                    { message: 'Username or email already exists', code: authCode.FIELD_ALREADY_EXISTS },
                    409
                );
            }

            // Tạo user
            const user = await UserModel.createUser({ username, email, password, displayName });

            // Tạo tokens
            const tokenPayload = { userId: user.id, role: user.role };
            const accessToken = generateAccessToken(tokenPayload);
            const refreshToken = generateRefreshToken(tokenPayload);

            const accessTokenExpiresIn = parseDuration(process.env.ACCESS_EXPIRES || '1h');
            const refreshTokenExpiresAt = getExpiresAt(process.env.REFRESH_EXPIRES || '7d');

            await refreshTokenModel.create(refreshToken, user.id, refreshTokenExpiresAt);

            return res.success(
                {
                    user,
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
            return res.error(error);
        }
    }

    async login(req: Request, res: any) {
        try {
            const parseResult = loginSchema.safeParse(req.body);
            if (!parseResult.success) {
                return res.error({ message: parseResult.error.issues[0].message }, 400);
            }
            const { emailOrUsername, password } = parseResult.data;

            const user = await UserModel.findByEmailOrUsername(emailOrUsername, emailOrUsername);
            if (!user) {
                return res.error({ message: 'Invalid credentials', code: authCode.USER_NOT_FOUND }, 401);
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.error({ message: 'Invalid credentials', code: authCode.INVALID_PASSWORD }, 401);
            }

            // Tạo tokens
            const tokenPayload = { userId: user.id, role: user.role };
            const accessToken = generateAccessToken(tokenPayload);
            const refreshToken = generateRefreshToken(tokenPayload);

            const accessTokenExpiresIn = parseDuration(process.env.ACCESS_EXPIRES || '1h');
            const refreshTokenExpiresAt = getExpiresAt(process.env.REFRESH_EXPIRES || '7d');

            await refreshTokenModel.create(refreshToken, user.id, refreshTokenExpiresAt);

            return res.success(
                {
                    user,
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
            return res.error(error);
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

    async socialAuth(req: Request, res: any) {
        try {
            const { provider, providerId, email, displayName } = req.body;

            if (!provider || !providerId) {
                return res.error({ message: 'Missing provider or providerId' }, 400);
            }

            // Tìm user theo provider + providerId
            let user = await UserModel.findByProvider(provider, providerId);

            if (!user) {
                // Nếu chưa có, tạo user mới
                user = await UserModel.createUser({
                    username: `${provider}_${providerId}`,
                    email: email || `${provider}_${providerId}@example.com`,
                    password: '',
                    displayName,
                    provider,
                    providerId,
                    role: 'user'
                });
            }

            // Tạo token
            const tokenPayload = { userId: user.id, role: user.role };
            const accessToken = generateAccessToken(tokenPayload);
            const refreshToken = generateRefreshToken(tokenPayload);

            const accessTokenExpiresIn = parseDuration(process.env.ACCESS_EXPIRES || '1h');
            const refreshTokenExpiresAt = getExpiresAt(process.env.REFRESH_EXPIRES || '7d');

            await refreshTokenModel.create(refreshToken, user.id, refreshTokenExpiresAt);

            return res.success(
                {
                    user,
                    token: {
                        access_token: accessToken,
                        expired_in: accessTokenExpiresIn,
                        refresh_token: refreshToken
                    }
                },
                200
            );
        } catch (error) {
            console.error('Social auth error:', error);
            return res.error(error);
        }
    }

    async forgotPassword(req: Request, res: any) {
        try {
            const parseResult = forgotPasswordSchema.safeParse(req.body);
            if (!parseResult.success) {
                return res.error({ message: parseResult.error.issues[0].message }, 400);
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
                return res.error({ message: parseResult.error.issues[0].message }, 400);
            }

            const { email, newPassword } = parseResult.data;

            // Hash new password
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // Update user password
            await UserModel.updatePassword(email, hashedPassword);

            return res.success({ message: 'Password successfully reset' }, 200);
        } catch (error) {
            console.error('Reset password error:', error);
            return res.error(error);
        }
    }
}

export default new AuthController();
