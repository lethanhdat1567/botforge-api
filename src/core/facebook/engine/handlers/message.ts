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
import userStore from '~/core/facebook/store/userStore';
import userFlowStateModel from '~/models/userFlowState.model';
import { PendingVariable } from '~/core/facebook/store/components/pendingVariables';

export async function handleMessageNode(node: MessageNode, senderId: string, pageId: string) {
    let isButton = null;
    const payload = node.payload;

    for (const data of payload) {
        if (data.type === 'button' || data.type === 'quick_replies') {
            isButton = true;
        }

        switch (data.type) {
            case 'text':
                await sendTextMessage(senderId, pageId, data.fields.text);
                break;
            case 'button':
                await sendButtonMessage(senderId, pageId, data.fields.text, data.fields.buttons);
                break;

            case 'quick_replies':
                await sendQuickReplies(senderId, pageId, data.fields.text, data.fields.quickReplies);
                break;

            case 'attachment':
                await sendAttachment(senderId, data.fields.attachmentType, data.fields.url);
                break;

            case 'sender_actions':
                await sendSenderAction(senderId, data.fields.action);
                break;

            case 'welcome_screen':
                await sendTextMessage(senderId, pageId, data.fields.text);
                break;

            case 'persistent_menu':
                await sendButtonMessage(senderId, pageId, data.fields.text, data.fields.menuItems);
                break;
            case 'generic_template':
                await sendGenericTemplate(senderId, pageId, data.fields.elements);
                break;
            case 'coupon_template':
                sendCouponTemplate(senderId, pageId, data.fields);
                break;
            case 'media_template':
                sendMediaTemplate(senderId, pageId, data.fields);
                break;
            case 'receipt_template':
                await sendReceiptTemplate(senderId, data.fields);
                break;
        }
    }
    const nextNodeId = node.children?.next;
    if (nextNodeId) {
        runFlow(nextNodeId, senderId, pageId);
    } else {
        if (isButton) {
            const user = userStore.getUser(pageId, senderId);
            const pendingVariable = new PendingVariable({
                type: 'postback' as any,
                key: null
            });
            user?.addPendingVariables(pendingVariable, node.id);
            userFlowStateModel.updateByPlatformUserAndPage(senderId, pageId, { status: 'pending' });
        } else {
            endFlowHandller(pageId, senderId);
        }
    }
}
