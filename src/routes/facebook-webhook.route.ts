import { Router } from 'express';
import facebookWebhookController from '~/controllers/facebook-webhook.controller';
import { facebookWebhookMiddleware } from '~/middlewares/facebookWebhook.middleware';

const router = Router();

router.get('/', facebookWebhookController.verify);
router.post('/', facebookWebhookMiddleware, facebookWebhookController.handle);

export default router;
