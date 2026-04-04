import { envConfig } from '~/config/envConfig';
import { FbRequest } from '~/middlewares/facebookWebhook.middleware';
import facebookWebhookService from '~/services/facebook-webhook.service';

class FacebookWebhookController {
    async verify(req: any, res: any) {
        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (mode && token) {
            console.log('run here');

            if (mode === 'subscribe' && token === envConfig.facebook.verifyToken) {
                console.log('WEBHOOK_VERIFIED');
                return res.status(200).send(challenge);
            } else {
                return res.sendStatus(403);
            }
        }

        res.sendStatus(400);
    }
    async handle(req: FbRequest, res: any) {
        await facebookWebhookService.executeEvents(req.fbEvents ?? []);

        return res.status(200).send('EVENT_RECEIVED');
    }
}

export default new FacebookWebhookController();
