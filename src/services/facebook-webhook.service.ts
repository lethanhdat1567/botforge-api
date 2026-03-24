import { getCurrentNodeAndLogicJson } from '~/helpers/flow.helper';
import facebookSenderService from '~/services/facebook-sender.service';
import { flowExecutorService } from '~/services/flow-executor.service';
import flowRecordService from '~/services/flow-record.service';
import flowService from '~/services/flow.service';
import { isRegexMatch } from '~/utils/regex';
import { isFlowExpired } from '~/utils/time';

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

        console.log('Tasks running: ', tasks);
        await Promise.all(tasks);
    }

    private async classifyEvent(pageUid: string, senderId: string, event: any) {
        if (event.message) {
            const text = await event.message.text;

            return await this.handleMessage(pageUid, senderId, text);
        }

        if (event.postback) {
            return await this.handlePostback(pageUid, senderId, event.postback);
        }

        if (event.message?.quick_reply) {
            return;
        }
    }

    private async handleMessage(pageUid: string, senderId: string, message: any) {
        const exitFlowRecord = await flowRecordService.findByPageUidAndSenderId(pageUid, senderId);

        // * Exit flow: pending | running | processing
        if (exitFlowRecord) {
            if (exitFlowRecord.status === 'running' || exitFlowRecord.status === 'processing') return;
            if (exitFlowRecord.status === 'pending') {
                const flowPageId = exitFlowRecord?.flow?.page?.id || '';
                await flowRecordService.setProcessing(exitFlowRecord.id);
                const waitingVariables = await flowRecordService.getWaitingVariable(exitFlowRecord.id);

                if (!waitingVariables) {
                    return await flowRecordService.setError(exitFlowRecord.id, 'Không có pending variable');
                }
                // * Check fallback
                const isExpired = isFlowExpired(exitFlowRecord.expiresAt);

                if (isExpired) {
                    await facebookSenderService.sendTextMessage(exitFlowRecord.id, flowPageId, senderId, {
                        text: waitingVariables.fallback.message
                    });
                    return await flowRecordService.setCancel(exitFlowRecord.id);
                }
                // *Check regex
                const isMatch = isRegexMatch(message, waitingVariables.variable.regex || '');

                if (isMatch) {
                    await flowRecordService.setVariable(exitFlowRecord.id, waitingVariables.variable.key, message);
                    await flowRecordService.setRunning(exitFlowRecord.id);

                    const currentFlow = await flowService.findById(exitFlowRecord.flowId);
                    const { currentNode, logicJson } = getCurrentNodeAndLogicJson(
                        currentFlow,
                        currentFlow?.startNodeId
                    );

                    if (!currentFlow || !logicJson) {
                        return await flowRecordService.setError(
                            exitFlowRecord.id,
                            'Flow not found when check regex message'
                        );
                    }

                    return await flowExecutorService.runFlow(
                        exitFlowRecord.id,
                        pageUid,
                        senderId,
                        currentNode.next,
                        currentFlow.logicJson as any
                    );
                } else {
                    await facebookSenderService.sendTextMessage(exitFlowRecord.id, flowPageId, senderId, {
                        text: waitingVariables.variable.regexMessage || ''
                    });
                    const currentFlow = await flowService.findById(exitFlowRecord.flowId);
                    const { currentNode, logicJson } = getCurrentNodeAndLogicJson(
                        currentFlow,
                        currentFlow?.startNodeId
                    );

                    if (!currentFlow || !logicJson) {
                        return await flowRecordService.setError(
                            exitFlowRecord.id,
                            'Flow not found when check regex message'
                        );
                    }

                    return await flowExecutorService.runFlow(
                        exitFlowRecord.id,
                        pageUid,
                        senderId,
                        currentNode.id as string,
                        currentFlow.logicJson as any
                    );
                }
            }
            return;
        }
        // * New flow
        else {
            const flow = await flowService.findActiveByPageUid(pageUid);
            const flowPageId = flow?.page?.id;
            if (!flow) {
                console.log('Flow not found with pageId: ', pageUid);
                return;
            }

            if (!flowPageId) {
                console.log('Page Id not found with pageUid: ', pageUid);
                return;
            }

            if (!flow.startNodeId) {
                console.log("Flow didn't have startNodeId yet: ", pageUid);
                return;
            }

            const newFlowRecord = await flowRecordService.create({
                currentNodeId: flow.startNodeId,
                flowId: flow.id,
                senderId: senderId
            });

            return await flowExecutorService.runFlow(
                newFlowRecord.id,
                flowPageId,
                senderId,
                newFlowRecord.currentNodeId,
                flow.logicJson as any
            );
        }
    }

    private async handlePostback(pageUid: string, senderId: string, postback: any) {
        const buttonPayload = JSON.parse(postback.payload);
        const { key, value } = buttonPayload;

        if (key && value) {
            await flowRecordService.setVariable(buttonPayload.flowRecordId, key, value);
        }

        const flowRecord = await flowRecordService.findById(buttonPayload.flowRecordId);

        if (!flowRecord) return;
        if (!buttonPayload?.next) return;

        const flow = await flowService.findById(flowRecord.flowId);

        if (!flow) return;
        const logicJsonObj = flow.logicJson as Record<string, any>;

        await flowRecordService.setRunning(flowRecord.id);

        return await flowExecutorService.runFlow(
            flowRecord.id,
            flow?.page?.id || '',
            flowRecord.senderId,
            buttonPayload.next,
            logicJsonObj
        );
    }
}

export default new FacebookWebhookService();
