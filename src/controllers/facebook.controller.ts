import { Request, Response } from 'express';
import { FbRequest } from '~/middlewares/facebookWebhook.middleware';
import { runFlow } from '~/core/facebook/engine/engine';
import { sendTextMessage } from '~/core/facebook/services/services';
import userStore from '~/core/facebook/store/userStore';
import {
    endFlowHandller,
    handleSavePendingVariable,
    runNextOrEnd,
    setPostbackVariablePayload
} from '~/core/facebook/engine/handlers/flow';
import userFlowStateModel from '~/models/userFlowState.model';
import { mockFlow } from '~/core/facebook/flows/test.flow';
import flowModel from '~/models/flow.model';

class FacebookController {
    // Verify webhook
    verifyWebhook(req: Request, res: Response) {
        const mode = req.query['hub.mode'];
        const token = req.query['hub.verify_token'];
        const challenge = req.query['hub.challenge'];

        if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }

    // Handle incoming webhook events
    async handleWebhook(req: FbRequest, res: Response) {
        const fbEvents = req.fbEvents || [];

        res.sendStatus(200);

        for (const event of fbEvents) {
            // State
            const senderId = event.senderId;
            const pageId = event.pageId;
            const user = userStore.getUser(pageId, senderId);
            const msg = event.message;
            console.log(`[FB IN] sender: ${senderId}, page: ${pageId}, text: ${msg?.text || ''}, user:`, user);

            // =================== CHECK FLOW ===================
            // Check flow status
            if (user?.flowStatus === 'running' || user?.flowStatus === 'pending_processing') {
                console.log('Ignore message: ', event.message);
                continue;
            }

            // Check expired flow
            if (user?.pendingVariables?.isExpired()) {
                sendTextMessage(senderId, pageId, 'Qua thời gian hành động, vui lồng tập trình lập lai.');
                endFlowHandller(pageId, senderId);
                userFlowStateModel.updateByPlatformUserAndPage(senderId, pageId, { status: 'cancelled' });
                return;
            }

            // =================== CORE LOGIC ===================
            // ------ TEXT MESSAGE ------
            if (event.type === 'message') {
                if (msg.attachments && msg.attachments.length > 0) {
                    await sendTextMessage(
                        senderId,
                        pageId,
                        '⚠️ Bot hiện chỉ hỗ trợ văn bản. Vui lòng gửi lại nội dung dạng text.'
                    );
                    continue;
                }

                // ------ QUICK REPLY ------
                if (msg.quick_reply) {
                    try {
                        const payload = JSON.parse(msg.quick_reply.payload);
                        // ------ SET POSTBACK PAYLOAD TO VARIABLE ------
                        setPostbackVariablePayload(payload, user);
                        runNextOrEnd(payload.nextId, senderId, pageId);
                    } catch (err) {
                        console.error('Invalid quick reply payload', err);
                    }
                }
                // ====== NORMAL MESSAGE: INIT || PENDING =====
                else {
                    // ---- INIT ----
                    if (msg.text === 'init') {
                        userStore.add(pageId, senderId);
                        user?.updateFlowStatus('running');

                        const currentFlow = await flowModel.findByPageId(pageId);
                        if (!currentFlow) {
                            throw new Error('Flow not found');
                        } else if (!currentFlow.startNodeId) {
                            throw new Error('Flow is not active');
                        }

                        userFlowStateModel.create({
                            platformUserId: senderId,
                            ownerUserId: '643556e9-6593-483c-ac00-b19a9f7a0333',
                            flowId: currentFlow?.id,
                            currentStep: currentFlow.startNodeId,
                            status: 'running',
                            pageId: pageId
                        });

                        runFlow(currentFlow.startNodeId, senderId, pageId);
                        return;
                    }
                    // ----- PENDING ----
                    else {
                        const pendingVariable = user?.getPendingVariable();
                        // Set pending variable
                        if (pendingVariable) {
                            const currentNode = user?.flowId ? mockFlow[user.flowId] : null;
                            handleSavePendingVariable(pendingVariable, msg, currentNode, senderId, pageId, user);
                        }
                        // Fallback
                        else {
                            sendTextMessage(senderId, pageId, 'Fallback message. Please try again.');
                            endFlowHandller(pageId, senderId);
                        }
                    }
                }
            }

            //
            // =================== POSTBACK REPSONSE ===================
            else if (event.type === 'postback') {
                try {
                    const payload = JSON.parse(event.postback.payload);
                    setPostbackVariablePayload(payload, user);
                    runNextOrEnd(payload.next, senderId, pageId);
                    return;
                } catch (err) {
                    console.error('Invalid postback payload', err);
                }
            }
        }
    }
}

export default new FacebookController();
