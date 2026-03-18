import { flowExecutorService } from '~/services/flow-executor.service';

class WebhookController {
    async get(req: any, res: any) {
        flowExecutorService.triggerFlow();

        return res.success({
            message: 'Check log'
        });
    }
}

export default new WebhookController();
