import { runFlow } from '~/core/facebook/engine/engine';
import { Node } from '~/core/facebook/engine/types/node';
import { sendTextMessage } from '~/core/facebook/services/services';
import { PendingVariable } from '~/core/facebook/store/components/pendingVariables';
import { UserItem } from '~/core/facebook/store/components/userItem';
import userStore from '~/core/facebook/store/userStore';

// ====== END FLOW ======
export function endFlowHandller(pageId: string, senderId: string) {
    const user = userStore.getUser(pageId, senderId);

    console.log('PendingValue: ', user?.getPendingVariable());
    console.log('Variables:', user?.variables);
    console.log('----------End node----------');
    userStore.remove(pageId, senderId);
    console.log(userStore.getAll());
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

        //  Validate input
        if (pendingVariable?.regex && !pendingVariable.validate(msg.text)) {
            await sendTextMessage(senderId, 'Invalid input. Please try again.');
            if (currentNode?.id) runFlow(currentNode.id, senderId, pageId);
            return;
        }

        // Save variable
        if (pendingVariable?.key) {
            user.setVariableValue(pendingVariable.key, msg.text);
        }
        user.updateFlowStatus('running');

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
    } else {
        console.log('User not found');
        return;
    }
}
