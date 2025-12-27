import { MessageNode } from '../types/message';
import { runFlow } from '../engine';
import {
    sendAttachment,
    sendButtonMessage,
    sendCouponTemplate,
    sendGenericTemplate,
    sendMediaTemplate,
    sendQuickReplies,
    sendReceiptTemplate,
    sendSenderAction,
    sendTextMessage
} from '~/core/facebook/services/services';
import { endFlowHandller } from '~/core/facebook/engine/handlers/flow';
import { send } from 'node:process';

export async function handleMessageNode(node: MessageNode, senderId: string, pageId: string) {
    const payload = node.payload;

    switch (payload.type) {
        case 'text':
            await sendTextMessage(senderId, payload.fields.text);
            break;
        case 'button':
            await sendButtonMessage(senderId, payload.fields.text, payload.fields.buttons);
            break;

        case 'quick_replies':
            await sendQuickReplies(senderId, payload.fields.text, payload.fields.quickReplies);
            break;

        case 'attachment':
            await sendAttachment(senderId, payload.fields.attachmentType, payload.fields.url);
            break;

        case 'sender_actions':
            await sendSenderAction(senderId, payload.fields.action);
            break;

        case 'welcome_screen':
            await sendTextMessage(senderId, payload.fields.text);
            break;

        case 'persistent_menu':
            await sendButtonMessage(senderId, payload.fields.text, payload.fields.menuItems);
            break;
        case 'generic_template':
            await sendGenericTemplate(senderId, payload.fields.elements);
            break;
        case 'coupon_template':
            sendCouponTemplate(senderId, payload.fields);
            break;
        case 'media_template':
            sendMediaTemplate(senderId, payload.fields);
            break;
        case 'receipt_template':
            await sendReceiptTemplate(senderId, payload.fields);
            break;
    }

    const nextNodeId = node.children?.next;
    if (nextNodeId) {
        runFlow(nextNodeId, senderId, pageId);
    } else {
        endFlowHandller(pageId, senderId);
    }
}
