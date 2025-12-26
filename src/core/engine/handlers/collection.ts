import { CollectionNode } from '~/core/engine/types/collection';
import { sendButtonMessage, sendTextMessage } from '~/core/services/services';
import { PendingVariable } from '~/core/store/components/pendingVariables';
import userStore from '~/core/store/userStore';
import { parseDuration } from '~/utils/time';

export async function handleCollectionNode(node: CollectionNode, senderId: string, pageId: string) {
    if (node.payload.fields.buttons.length === 0) {
        await sendTextMessage(senderId, node.payload.fields.text);
    } else {
        await sendButtonMessage(senderId, node.payload.fields.text, node.payload.fields.buttons);
    }

    const user = userStore.getUser(pageId, senderId);
    const variable = node.payload.fields.variable;
    if (!user) {
        throw new Error('User not found in collection');
    }

    const pendingVariable = new PendingVariable({
        type: variable.type,
        key: variable.key,
        regex: variable.regex,
        fallback: variable.fallback,
        timeout: parseDuration(variable.timeout)
    });

    user.addPendingVariables(pendingVariable, node.id);

    console.log('Waiting for user');
}
