import flowRecordService from '~/services/flow-record.service';
import flowService from '~/services/flow.service';

class FacebookWebhookService {
    async execute(body: any) {
        if (body.object !== 'page') return;

        for (const entry of body.entry) {
            const pageUid = entry.id;

            for (const event of entry.messaging) {
                const senderId = event.sender.id;

                await this.classifyEvent(pageUid, senderId, event);
            }
        }
    }

    private async classifyEvent(pageUid: string, senderId: string, event: any) {
        if (event.message) {
            return await this.handleMessage(pageUid, senderId, event.message);
        }

        // 2. Nếu là bấm nút (Postback)
        if (event.postback) {
            return;
        }

        if (event.message?.quick_reply) {
            return;
        }
    }

    private async handleMessage(pageUid: string, senderId: string, message: any) {
        // Kiem tra xem record ton tai chua
        const flowRecord = await flowRecordService.findByPageIdAndSenderId(pageUid, senderId);

        if (flowRecord) {
        } else {
            const flow = await flowService.findActiveByPageId(pageUid);
            const startNodeId = flow?.startNodeId;

            if (!flow || !startNodeId) return;

            await flowRecordService.create({
                pageId: pageUid,
                senderId,
                flowId: flow?.id,
                currentNodeId: startNodeId
            });
        }
    }
}

export default new FacebookWebhookService();
