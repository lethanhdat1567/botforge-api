import { CollectionNode } from '~/core/engine/types/collection';
import { PendingVariable } from '~/core/store/components/pendingVariables';
import userStore from '~/core/store/userStore';
import { parseDuration } from '~/utils/time';

export function handleCollectionNode(node: CollectionNode, senderId: string, pageId: string) {
    const user = userStore.add(pageId, senderId);

    const f = node.payload.fields;

    const pendingVariable = new PendingVariable({
        type: f.type,
        key: f.key,
        regex: f.regex,
        fallback: f.fallback,
        timeout: parseDuration(f.timeout)
    });

    user.addPendingVariables(pendingVariable, node.id);

    console.log(`[Collection] User ${senderId} đang chờ nhập: ${f.key}`);
}
