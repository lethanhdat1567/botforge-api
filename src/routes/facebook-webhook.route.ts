import { Router } from 'express';
import facebookWebhookController from '~/controllers/facebook-webhook.controller';

const router = Router();

router.get('/', facebookWebhookController.verify);
router.post('/', facebookWebhookController.handle);

export default router;
