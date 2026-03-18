import express from 'express';
import webhookController from '~/controllers/webhook.controller';

const router = express.Router();

router.get('/', webhookController.get);

export default router;
