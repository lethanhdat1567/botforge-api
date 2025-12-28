import express from 'express';
import { authMiddleware } from '~/middlewares/auth.middleware';
import FlowLikeController from '~/controllers/flow-like.controller';

const router = express.Router();
router.use(authMiddleware);

router.post('/:flowShareId/toggle', FlowLikeController.toggle); // Toggle like/unlike
router.get('/:flowShareId/count', FlowLikeController.count); // Lấy số lượng like
router.get('/:flowShareId/users', FlowLikeController.listUsers); // Lấy danh sách user đã like
router.get('/:flowShareId/status', FlowLikeController.status); // Kiểm tra trạng thái like của user hiện tại

export default router;
