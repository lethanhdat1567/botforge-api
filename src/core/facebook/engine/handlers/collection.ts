import { resolveFallback, resolveTimeout } from '~/core/facebook/engine/handlers/helpers';
import { CollectionNode } from '~/core/facebook/engine/types/collection';
import { sendButtonMessage, sendTextMessage } from '~/core/facebook/services/services';
import { PendingVariable } from '~/core/facebook/store/components/pendingVariables';
import userStore from '~/core/facebook/store/userStore';
import flowFallbackModel from '~/models/flow-fallback.model';
import flowModel from '~/models/flow.model';
import userFlowStateModel from '~/models/userFlowState.model';
import { durationWithUnitToMs } from '~/utils/time';

export async function handleCollectionNode(node: CollectionNode, senderId: string, pageId: string) {
    const { text, buttons, variable } = node.payload.fields;

    // 1. Send message
    if (buttons.length === 0) {
        await sendTextMessage(senderId, pageId, text);
    } else {
        await sendButtonMessage(senderId, pageId, text, buttons);
    }

    // 2. Get user
    const user = userStore.getUser(pageId, senderId);
    if (!user) {
        throw new Error('User not found in collection');
    }

    // 3. Get fallback config
    const currentFlow = await flowModel.findByPageId(pageId);
    const fallbackData = await flowFallbackModel.findByUser(currentFlow?.userId || '');

    const fallbackValue = resolveFallback(variable, fallbackData);
    const timeout = resolveTimeout(variable, fallbackData);

    // 4. Create pending variable
    const pendingVariable = new PendingVariable({
        type: variable.type,
        key: variable.key,
        regex: variable.regex,
        fallback: fallbackValue,
        timeout: durationWithUnitToMs(timeout.duration, timeout.unit as any)
    });

    // 5. Save state
    user.addPendingVariables(pendingVariable, node.id);

    await userFlowStateModel.updateByPlatformUserAndPage(senderId, pageId, { status: 'pending' });

    console.log(`[SET_PENDING_COLLECTION] key: ${variable.key}`);
}
