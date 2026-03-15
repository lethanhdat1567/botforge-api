import { Request } from 'express';
import { authCode } from '~/constants/auth';
import { AuthRequest } from '~/middlewares/auth.middleware';
import { sendEmail } from '~/config/mailer';
import authService from '~/services/auth.service';
import { envConfig } from '~/config/envConfig';
import { httpCode } from '~/constants/httpsCode';

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
        const { refreshToken } = req.body;

        const [error, data] = await authService.refreshToken(refreshToken);

        if (error) {
            return res.error({ message: error }, httpCode.clientError.unauthorized);
        }

        return res.success(data);
    }

    async logout(req: AuthRequest, res: any) {
        const { refreshToken } = req.body;

        await authService.logout(refreshToken);

        return res.success({ message: 'Logout successfully' });
    }
}

export default new AuthController();
