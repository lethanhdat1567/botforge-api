import express from 'express';
import authController from '~/controllers/auth.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

// Local
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authMiddleware, authController.logout);

// Social
router.post('/social/google', authController.googleAuth);
router.post('/social/facebook', authController.facebookAuth);

// Forgot password
router.post('/forgot-password', authController.forgotPassword);
router.get('/check-reset-token', authController.checkResetToken);
router.post('/reset-password', authController.resetPassword);

export default router;
