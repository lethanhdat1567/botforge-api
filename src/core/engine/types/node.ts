import { ActionData } from '~/core/engine/types/action';
import { CollectionData } from '~/core/engine/types/collection';
import { MessageData } from '~/core/engine/types/message';

export type NodeCategory = 'message' | 'action' | 'collection';

export interface Node {
    id: string;
    category: NodeCategory;
    payload: MessageData | ActionData | CollectionData;
    children?: Record<string, string>;
}
