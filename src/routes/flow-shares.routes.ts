import express from 'express';
import flowShareController from '~/controllers/flow-share.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';
import requireRole from '~/middlewares/role.middleware';

const router = express.Router();

router.get('/public', flowShareController.public);
router.get('/related/:id', flowShareController.related);

router.use(authMiddleware);

router.get('/', flowShareController.list);
router.get('/admin', requireRole, flowShareController.listForAdmin);
router.get('/:id', flowShareController.detail);

router.post('/', flowShareController.create);

router.put('/:id', flowShareController.update);

router.delete('/:id', flowShareController.remove);

router.post('/delete-many', flowShareController.removeMany);

export default router;
