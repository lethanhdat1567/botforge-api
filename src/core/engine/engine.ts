import { Node } from './types/node';
import { handleMessageNode } from './handlers/message';
import { flow } from '~/core/flows/test.flow';
import { MessageNode } from '~/core/engine/types/message';
import { handleActionNode } from '~/core/engine/handlers/action';
import { ActionNode } from '~/core/engine/types/action';
import { handleCollectionNode } from '~/core/engine/handlers/collection';
import { CollectionNode } from '~/core/engine/types/collection';

export async function runFlow(nodeId: string) {
    const node: Node = flow[nodeId];
    if (!node) return console.warn('Node not found:', nodeId);

    switch (node.category) {
        case 'message':
            handleMessageNode(node as MessageNode);
            break;
        case 'action':
            await handleActionNode(node as ActionNode);
            break;
        case 'collection':
            handleCollectionNode(node as CollectionNode);
            break;
    }
}
