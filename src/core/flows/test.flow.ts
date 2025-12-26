import { CollectionNode } from '~/core/engine/types/collection';
import { MessageNode } from '~/core/engine/types/message';

export const flowWithCollection: Record<string, CollectionNode | MessageNode> = {
    // Node 1: text chào mừng
    node1: {
        id: 'node1',
        category: 'message',
        payload: { type: 'text', fields: { text: 'Welcome! Let’s collect some info from you.' } },
        children: { next: 'node2' }
    },

    // Node 2: collection hỏi tên, email, phone
    node2: {
        id: 'node2',
        category: 'collection',
        payload: {
            type: 'collection',
            fields: {
                type: 'text', // chung type, thực tế bạn sẽ có nhiều field riêng
                key: 'user_info',
                value: undefined,
                regex: undefined,
                fallback: 'Please enter valid info.',
                timeout: '60s'
            }
        },
        children: { next: 'node3' }
    },

    // Node 3: text xác nhận
    node3: {
        id: 'node3',
        category: 'message',
        payload: {
            type: 'text',
            fields: { text: 'Thanks! Your information has been recorded.' }
        }
    }
};
