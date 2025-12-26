import express from 'express';
import { runFlow } from '~/core/engine/engine';
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
        // // ------ XỬ LÝ PENDING VARIABLE ------
        // if (user?.getPendingVariable()) {
        //     const pending = user.getPendingVariable()!;
        //     const text = event.message?.text;
        //     if (text) {
        //         const success = user.setPendingValue(pending.key, text);
        //         if (success) {
        //             // Chạy node tiếp theo nếu có
        //             if (pending.next) {
        //                 await runFlow(pending.next, senderId, pageId);
        //             }
        //         } else {
        //             // Nếu value không hợp lệ, có thể gửi fallback
        //             if (pending.fallback) {
        //                 await runFlow(pending.fallback, senderId, pageId);
        //             }
        //         }
        //         continue; // đã xử lý pending, bỏ qua flow bình thường
        //     }
        // }

        // ------ TEXT MESSAGE ------
        if (event.type === 'message') {
            const msg = event.message;
            // ------ RESPONSE ------
            if (msg.quick_reply) {
                try {
                    const payload = JSON.parse(msg.quick_reply.payload);
                    if (payload.next) {
                        await runFlow(payload.next, senderId, pageId);
                    }
                } catch (err) {
                    console.error('Invalid quick reply payload', err);
                }
            }
            // ------ INIT FLOW ------
            else {
                if (msg.text === 'init') {
                    userStore.add(pageId, senderId);
                    await runFlow('node1', senderId, pageId);
                    return;
                }
            }
        }

        // ------ RESPONDE  -----
        // ------ POSTBACK ------
        else if (event.type === 'postback') {
            try {
                const payload = JSON.parse(event.postback.payload);

                if (payload.next) {
                    await runFlow(payload.next, senderId, pageId);
                }
            } catch (err) {
                console.error('Invalid postback payload', err);
            }
        }
    }

    res.sendStatus(200);
});

export default router;
