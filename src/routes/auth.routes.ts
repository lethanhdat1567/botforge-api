import express from 'express';
import authController from '~/controllers/auth.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

// Local
router.post('/register', authController.register);
router.post('/verify-email', authController.verifyEmail);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.post('/verify-reset-password', authController.verifyResetPassword);
router.post('/reset-password', authController.resetPassword);

router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authMiddleware, authController.logout);

// Social
router.post('/social/google', authController.googleAuth);
router.post('/social/facebook', authController.facebookAuth);

// Forgot password
router.get('/check-reset-token', authController.checkResetToken);

export default router;
