import express from 'express';
import flowRecordController from '~/controllers/flow-record.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

router.get('/', authMiddleware, flowRecordController.list);
router.delete('/:id', flowRecordController.delete);
router.post('/bulk', flowRecordController.bulkDelete);

export default router;
