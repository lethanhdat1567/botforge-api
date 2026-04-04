import { FbEvent } from '~/middlewares/facebookWebhook.middleware';
import { getCurrentNodeAndLogicJson } from '~/helpers/flow.helper';
import facebookSenderService from '~/services/facebook-sender.service';
import { flowExecutorService } from '~/services/flow-executor.service';
import flowRecordService from '~/services/flow-record.service';
import flowService from '~/services/flow.service';
import { isRegexMatch } from '~/utils/regex';
import { isFlowExpired } from '~/utils/time';

type ButtonLikePayload = {
    flowRecordId?: string;
    key?: string;
    value?: string;
    next?: string;
};

class FacebookWebhookService {
    async executeEvents(events: FbEvent[]) {
        const tasks = events.map((e) => {
            const pageUid = e.pageId;
            if (e.type === 'message') {
                return this.classifyMessage(pageUid, e.senderId, e.message);
            }
            return this.handlePostback(pageUid, e.senderId, e.postback);
        });
        await Promise.all(tasks);
    }

    private async classifyMessage(pageUid: string, senderId: string, message: any) {
        const qrPayload = message?.quick_reply?.payload;
        if (qrPayload != null && qrPayload !== '') {
            const parsed = this.tryParseJsonPayload(String(qrPayload));
            if (parsed && parsed.flowRecordId) {
                return await this.applyPostbackPayload(pageUid, senderId, parsed);
            }
            return await this.handleMessage(pageUid, senderId, String(qrPayload));
        }

        const text = message?.text;
        return await this.handleMessage(pageUid, senderId, text);
    }

    private tryParseJsonPayload(raw: string): ButtonLikePayload | null {
        try {
            const o = JSON.parse(raw);
            return o && typeof o === 'object' ? o : null;
        } catch {
            return null;
        }
    }

    private async handleMessage(pageUid: string, senderId: string, message: any) {
        const exitFlowRecord = await flowRecordService.findByPageUidAndSenderId(pageUid, senderId);

        if (exitFlowRecord) {
            if (exitFlowRecord.status === 'running' || exitFlowRecord.status === 'processing') return;
            if (exitFlowRecord.status === 'pending') {
                const flowPageId = exitFlowRecord?.flow?.page?.id || '';
                const acquired = await flowRecordService.trySetProcessing(exitFlowRecord.id);
                if (!acquired) return;

                const waitingVariables = await flowRecordService.getWaitingVariable(exitFlowRecord.id);

                if (!waitingVariables) {
                    return await flowRecordService.setError(exitFlowRecord.id, 'Không có pending variable');
                }

                const isExpired = isFlowExpired(exitFlowRecord.expiresAt);

                if (isExpired) {
                    await facebookSenderService.sendTextMessage(exitFlowRecord.id, flowPageId, senderId, {
                        text: waitingVariables.fallback.message
                    });
                    return await flowRecordService.setCancel(exitFlowRecord.id);
                }

                const textRaw = message == null ? '' : String(message);
                const textTrimmed = textRaw.trim();
                if (!textTrimmed) {
                    const hint = waitingVariables.variable.regexMessage?.trim() || 'Vui lòng nhập nội dung dạng chữ.';
                    await facebookSenderService.sendTextMessage(exitFlowRecord.id, flowPageId, senderId, {
                        text: hint
                    });
                    return await flowRecordService.revertToPending(exitFlowRecord.id);
                }

                const isMatch = isRegexMatch(textRaw, waitingVariables.variable.regex || '');

                const currentFlow = await flowService.findById(exitFlowRecord.flowId);
                const { currentNode, logicJson } = getCurrentNodeAndLogicJson(
                    currentFlow,
                    exitFlowRecord.currentNodeId
                );

                if (!currentFlow || !currentNode || !logicJson || Object.keys(logicJson).length === 0) {
                    return await flowRecordService.setError(
                        exitFlowRecord.id,
                        'Flow not found when check regex message'
                    );
                }

                if (isMatch) {
                    await flowRecordService.setVariable(exitFlowRecord.id, waitingVariables.variable.key, textRaw);
                    await flowRecordService.setRunning(exitFlowRecord.id);

                    if (!currentNode.next) {
                        return await flowRecordService.setComplete(exitFlowRecord.id);
                    }

                    return await flowExecutorService.runFlow(
                        exitFlowRecord.id,
                        flowPageId,
                        senderId,
                        currentNode.next,
                        currentFlow.logicJson as any
                    );
                }

                await facebookSenderService.sendTextMessage(exitFlowRecord.id, flowPageId, senderId, {
                    text: waitingVariables.variable.regexMessage || ''
                });
                return await flowRecordService.revertToPending(exitFlowRecord.id);
            }
            return;
        }

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

    private async handlePostback(pageUid: string, senderId: string, postback: any) {
        let buttonPayload: ButtonLikePayload;
        try {
            buttonPayload = JSON.parse(postback.payload);
        } catch {
            console.log('Invalid postback JSON payload');
            return;
        }
        await this.applyPostbackPayload(pageUid, senderId, buttonPayload);
    }

    private async applyPostbackPayload(pageUid: string, senderId: string, buttonPayload: ButtonLikePayload) {
        if (!buttonPayload?.flowRecordId) return;

        const flowRecord = await flowRecordService.findById(buttonPayload.flowRecordId);
        if (!flowRecord || flowRecord.senderId !== senderId) return;

        const flow = await flowService.findById(flowRecord.flowId);
        if (!flow?.page || flow.page.pageUid !== pageUid) return;

        const { key, value } = buttonPayload;
        if (key && value != null && value !== '') {
            await flowRecordService.setVariable(buttonPayload.flowRecordId, key, String(value));
        }

        if (!buttonPayload.next) return;

        const logicJsonObj = flow.logicJson as Record<string, any>;

        await flowRecordService.setRunning(flowRecord.id);

        return await flowExecutorService.runFlow(
            flowRecord.id,
            flow.page.id,
            flowRecord.senderId,
            buttonPayload.next,
            logicJsonObj
        );
    }
}

export default new FacebookWebhookService();
