import { Node } from './types/node';
import { handleMessageNode } from './handlers/message';
import { ActionNode } from '~/core/facebook/engine/types/action';
import { handleCollectionNode } from '~/core/facebook/engine/handlers/collection';
import { CollectionNode } from '~/core/facebook/engine/types/collection';
import userStore from '~/core/facebook/store/userStore';
import { handleActionNode } from '~/core/facebook/engine/handlers/action';
import { MessageNode } from '~/core/facebook/engine/types/message';
import { testTemplateFlow } from '~/core/facebook/flows/template.flow';

export async function runFlow(nodeId: string, senderId: string, pageId: string) {
    const node: Node = testTemplateFlow[nodeId];
    if (!node) {
        console.warn('Node not found:', nodeId);
        return;
    }

    userStore.updateFlow(pageId, senderId, nodeId);
    console.log(`[NODE START] ${node.id} (${node.category})`);

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
