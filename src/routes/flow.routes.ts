import express from 'express';
import flowController from '~/controllers/flow.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

// Áp dụng auth cho tất cả route
router.use(authMiddleware);

// Tạo flow mới
router.post('/', flowController.create);

// Lấy danh sách flow của user
router.get('/', flowController.list);

// Lấy chi tiết flow theo id
router.get('/:id', flowController.detail);

// Cập nhật flow theo id
router.patch('/:id', flowController.update);

// Xóa flow theo id
router.delete('/:id', flowController.remove);

// Duplicate flow sang folder mới
router.post('/:id/duplicate', flowController.duplicate);

export default router;
