import express from 'express';
import facebookController from '~/controllers/facebook.controller';
import { facebookWebhookMiddleware } from '~/middlewares/facebookWebhook.middleware';

const router = express.Router();

router.get('/', facebookController.verifyWebhook);

router.post('/', facebookWebhookMiddleware, facebookController.handleWebhook);

export default router;
