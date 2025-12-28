import express from 'express';
import flowController from '~/controllers/flow.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = express.Router();

router.use(authMiddleware);

router.post('/', flowController.create);

export default router;
