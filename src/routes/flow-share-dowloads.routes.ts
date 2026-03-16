import express from 'express';
import flowShareDowloadController from '~/controllers/flow-share-dowload.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import requireRole from '~/middlewares/role.middleware';

const router = express.Router();

router.use(authMiddleware);

// Check status
router.get('/status/:flowShareId', flowShareDowloadController.checkStatus);
// List my dowload
router.get('/me', flowShareDowloadController.listMyDowload);
// Create dowload
router.post('/', flowShareDowloadController.create);

router.use(requireRole);
// List dowload admin
router.get('/admin', flowShareDowloadController.listForAdmin);
// Delet dowload
router.delete('/:id', flowShareDowloadController.remove);
// Delete many dowload
router.post('/delete-many', flowShareDowloadController.removeMany);

export default router;
