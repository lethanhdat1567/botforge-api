import express from 'express';
import uploadController from '~/controllers/upload.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import { upload } from '~/middlewares/upload.middleware';

const router = express.Router();

// Upload 1 ảnh
router.post('/file', authMiddleware, upload.single('file'), uploadController.uploadFile);

// Upload nhiều ảnh
router.post('/files', authMiddleware, upload.array('files', 10), uploadController.uploadFiles);

// Xóa file
router.delete('/', authMiddleware, uploadController.deleteFile);

export default router;
