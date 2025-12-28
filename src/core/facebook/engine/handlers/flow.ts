import { sendEmail } from '~/config/mailer';
import { runFlow } from '~/core/facebook/engine/engine';
import { Node } from '~/core/facebook/engine/types/node';
import { sendTextMessage } from '~/core/facebook/services/services';
import { PendingVariable } from '~/core/facebook/store/components/pendingVariables';
import { UserItem } from '~/core/facebook/store/components/userItem';
import userStore from '~/core/facebook/store/userStore';
import userFlowStateModel from '~/models/userFlowState.model';

// ====== END FLOW ======
export function endFlowHandller(pageId: string, senderId: string) {
    const user = userStore.getUser(pageId, senderId);

    console.log('PendingValue: ', user?.getPendingVariable());
    console.log('Variables:', user?.variables);
    console.log('----------End node----------');
    userFlowStateModel.updateByPlatformUserAndPage(senderId, pageId, { status: 'completed' });
    userStore.remove(pageId, senderId);
    sendEmail('datlethanh1567@gmail.com', 'Done flow', 'Mot User da nhan tin cho ban');
}

// ====== SAVE VARIABLE AND STATUS ======
export async function handleSavePendingVariable(
    pendingVariable: PendingVariable | null,
    msg: { text: string },
    currentNode: Node | null,
    senderId: string,
    pageId: string,
    user?: UserItem
) {
    if (user) {
        user.updateFlowStatus('pending_processing');
        // ! Ngoại lệ cho message, dùng để pending button và quick_replies
        if (pendingVariable?.type === ('postback' as any)) {
            await sendTextMessage(senderId, pageId, 'Hãy chọn button đi!');
            if (currentNode?.id) runFlow(currentNode.id, senderId, pageId);
            return;
        }

        //  Validate input
        if (pendingVariable?.regex && !pendingVariable.validate(msg.text)) {
            await sendTextMessage(senderId, pageId, 'Invalid input. Please try again.');
            if (currentNode?.id) runFlow(currentNode.id, senderId, pageId);
            return;
        }

        // Save variable
        if (pendingVariable?.key) {
            user.setVariableValue(pendingVariable.key, msg.text);
        }
        user.updateFlowStatus('running');
        userFlowStateModel.updateByPlatformUserAndPage(senderId, pageId, { status: 'running' });

        runNextOrEnd(currentNode?.children?.next, senderId, pageId);
    } else {
        console.log('User not found');
        return;
    }
}

// ====== RUN NEXT OR END FLOW =====
export function runNextOrEnd(nextId: string | undefined, senderId: string, pageId: string) {
    if (nextId) {
        runFlow(nextId, senderId, pageId);
    } else {
        endFlowHandller(pageId, senderId);
    }
}

// ====== SET POSTBACK PAYLOAD =====
export function setPostbackVariablePayload(payload: { key?: string; value?: any }, user?: UserItem) {
    if (user) {
        user?.updateFlowStatus('pending_processing');
        if (payload.key) user?.setVariableValue(payload.key, payload.value);
        user?.updateFlowStatus('running');
        userFlowStateModel.updateByPlatformUserAndPage(user.psid, user.pageId, { status: 'running' });
    } else {
        console.log('User not found');
        return;
    }
}
