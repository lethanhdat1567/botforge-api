import express from 'express';
import profileController from '~/controllers/profile.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import { upload } from '~/middlewares/upload.middleware';

const router = express.Router();

router.get('/', authMiddleware, profileController.getProfile);
router.patch('/', authMiddleware, upload.single('avatar'), profileController.updateProfile);
router.patch('/password', authMiddleware, profileController.changePassword);

export default router;
