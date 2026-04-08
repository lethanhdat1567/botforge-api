import { Request } from 'express';
import { authCode } from '~/constants/auth';
import { AuthRequest } from '~/middlewares/auth.middleware';
import authService from '~/services/auth.service';
import { httpCode } from '~/constants/httpsCode';
import { queueService } from '~/services/queue.service';
import { queue } from '~/constants/queue';

class AuthController {
    async me(req: AuthRequest, res: any) {
        const userId = (req.user as any).id;

        const user = await authService.getMe(userId);

        return res.success(user);
    }

    async register(req: Request, res: any) {
        const { email, password, displayName } = req.body;

        const user = await authService.register(displayName, email, password);
        const userEmailToken = await authService.createVerifyToken(user.id, user.email, 'verify_email');

        await queueService.push(queue.verifyEmail, {
            user: user,
            token: userEmailToken.token
        });

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

        if (error || !token) {
            return res.error({ message: error }, httpCode.clientError.unauthorized);
        }

        await queueService.push(queue.sendResetPassword, { email, token });

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
            return res.error({ message: error, code: authCode.Unauthorized }, httpCode.clientError.unauthorized);
        }

        return res.success(data);
    }

    async logout(req: AuthRequest, res: any) {
        const { refreshToken } = req.body;

        await authService.logout(refreshToken);

        return res.success({ message: 'Logout successfully' });
    }

    async googleLogin(req: Request, res: any) {
        const { idToken } = req.body;

        if (!idToken) {
            return res.error({ message: 'idToken is required' }, httpCode.clientError.badRequest);
        }

        const [error, data] = await authService.googleLogin(idToken);

        if (error) {
            return res.error({ message: error }, httpCode.clientError.unauthorized);
        }

        return res.success(data);
    }
}

export default new AuthController();
