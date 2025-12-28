import { ActionData } from '~/core/facebook/engine/types/action';
import { CollectionData } from '~/core/facebook/engine/types/collection';
import { MessageData } from '~/core/facebook/engine/types/message';

export type NodeCategory = 'message' | 'action' | 'collection';

export interface Node {
    id: string;
    category: NodeCategory;
    payload: MessageData[] | ActionData[] | CollectionData;
    children?: Record<string, string>;
}
