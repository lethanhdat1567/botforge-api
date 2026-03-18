import { flowExecutorService } from '~/services/flow-executor.service';
import flowRecordService from '~/services/flow-record.service';
import flowService from '~/services/flow.service';

class FacebookWebhookService {
    async execute(body: any) {
        if (body.object !== 'page') return;
        const tasks: Promise<any>[] = [];

        for (const entry of body.entry) {
            const pageUid = entry.id;
            for (const event of entry.messaging) {
                const senderId = event.sender.id;

                tasks.push(this.classifyEvent(pageUid, senderId, event));
            }
        }

        await Promise.all(tasks);
    }

    private async classifyEvent(pageUid: string, senderId: string, event: any) {
        if (event.message) {
            const text = await event.message.text;

            return await this.handleMessage(pageUid, senderId, text);
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
        const exitFlowRecord = await flowRecordService.findByPageUidAndSenderId(pageUid, senderId);

        // * Exit flow: pending | running
        if (exitFlowRecord) {
            if (exitFlowRecord.status === 'running') return;

            if (exitFlowRecord.status === 'pending') {
                await flowRecordService.setWaitingVariable(exitFlowRecord.id, message);
                const flow = await flowService.detail(exitFlowRecord.flowId);

                if (!flow?.logicJson) return;
                await flowExecutorService.runFlow(
                    exitFlowRecord.id,
                    exitFlowRecord.pageId,
                    senderId,
                    exitFlowRecord.currentNodeId,
                    flow.logicJson as any
                );
            }

            return;
        }
        // * New flow
        else {
            const flow = await flowService.findActiveByPageUid(pageUid);
            if (!flow) {
                console.log('Flow not found with pageId: ', pageUid);
                return;
            }

            if (!flow.startNodeId) {
                console.log("Flow didn't have startNodeId yet: ", pageUid);
                return;
            }

            const newFlowRecord = await flowRecordService.create({
                currentNodeId: flow.startNodeId,
                flowId: flow.id,
                pageId: flow.pageId as string,
                senderId: senderId
            });

            return await flowExecutorService.runFlow(
                newFlowRecord.id,
                newFlowRecord.pageId,
                senderId,
                newFlowRecord.currentNodeId,
                flow.logicJson as any
            );
        }
    }
}

export default new FacebookWebhookService();
