import express from 'express';
import { runFlow } from '~/core/engine/engine';
import endFlowHandller from '~/core/engine/handlers/endFlow';
import { mockFlow } from '~/core/flows/test.flow';
import { sendTextMessage } from '~/core/services/services';
import userStore from '~/core/store/userStore';
import { facebookWebhookMiddleware, FbRequest } from '~/middlewares/facebookWebhook.middleware';

const router = express.Router();

router.get('/', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
    if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }
});

router.post('/', facebookWebhookMiddleware, async (req: FbRequest, res) => {
    const fbEvents = req.fbEvents || [];

    for (const event of fbEvents) {
        const senderId = event.senderId;
        const pageId = event.pageId;
        const user = userStore.getUser(pageId, senderId);

        if (user?.pendingVariables?.isExpired) {
            console.log('Da het han');
            endFlowHandller(pageId, senderId);
            return;
        }
        // ------ TEXT MESSAGE ------
        if (event.type === 'message') {
            const msg = event.message;
            // ------ RESPONSE ------
            // QUICK REPLY
            if (msg.quick_reply) {
                try {
                    const payload = JSON.parse(msg.quick_reply.payload);
                    user?.setVariableValue(payload.key, payload.value);
                    // Check next
                    if (payload.next) {
                        await runFlow(payload.next, senderId, pageId);
                    } else {
                        endFlowHandller(pageId, senderId);
                    }
                } catch (err) {
                    console.error('Invalid quick reply payload', err);
                }
            }
            // ------ INIT FLOW ------
            else {
                if (msg.text === 'init') {
                    userStore.add(pageId, senderId);
                    await runFlow('start', senderId, pageId);
                    return;
                } else {
                    const currentNode = user?.flowId ? mockFlow[user.flowId] : null;
                    const pendingVariable = user?.getPendingVariable();
                    if (pendingVariable?.regex) {
                        if (!pendingVariable.validate(msg.text)) {
                            await sendTextMessage(senderId, 'Invalid input. Please try again.');
                            runFlow(currentNode?.id as string, senderId, pageId);
                            return;
                        }
                    }
                    user?.setVariableValue(pendingVariable?.key || '', msg.text);

                    // Check next
                    if (currentNode && currentNode.children) {
                        await runFlow(currentNode.children.next, senderId, pageId);
                    } else {
                        endFlowHandller(pageId, senderId);
                    }
                }
            }
        }

        // ------ RESPONDE  -----
        // ------ POSTBACK ------
        else if (event.type === 'postback') {
            try {
                const payload = JSON.parse(event.postback.payload);
                user?.setVariableValue(payload.key, payload.value);
                if (payload.next) {
                    await runFlow(payload.next, senderId, pageId);
                } else {
                    endFlowHandller(pageId, senderId);
                }
            } catch (err) {
                console.error('Invalid postback payload', err);
            }
        }
    }

    res.sendStatus(200);
});

export default router;
