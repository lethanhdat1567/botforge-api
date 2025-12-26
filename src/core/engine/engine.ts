import { Node } from './types/node';
import { handleMessageNode } from './handlers/message';
import { MessageNode } from '~/core/engine/types/message';
// import { handleActionNode } from '~/core/engine/handlers/action';
import { ActionNode } from '~/core/engine/types/action';
import { handleCollectionNode } from '~/core/engine/handlers/collection';
import { CollectionNode } from '~/core/engine/types/collection';
import userStore from '~/core/store/userStore';
import { mockFlow } from '~/core/flows/test.flow';
import { handleActionNode } from '~/core/engine/handlers/action';

export async function runFlow(nodeId: string, senderId: string, pageId: string) {
    const node: Node = mockFlow[nodeId];
    if (!node) return console.warn('Node not found:', nodeId);

    userStore.updateFlow(pageId, senderId, nodeId);

    switch (node.category) {
        case 'message':
            handleMessageNode(node as MessageNode, senderId, pageId);
            break;
        case 'action':
            await handleActionNode(node as ActionNode, senderId, pageId);
            break;
        case 'collection':
            handleCollectionNode(node as CollectionNode, senderId, pageId);
            break;
    }
}
