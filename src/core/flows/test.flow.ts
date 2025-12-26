import { MessageNode } from '~/core/engine/types/message';

export const flow: Record<string, MessageNode> = {
    node1: {
        id: 'node1',
        category: 'message',
        payload: {
            type: 'text',
            fields: { text: 'Hello!' }
        },
        children: { next: 'node2' }
    },
    node2: {
        id: 'node2',
        category: 'message',
        payload: {
            type: 'button',
            fields: {
                text: 'Choose an option:',
                buttons: [
                    { type: 'postback', title: 'A', payload: 'a', next: 'node3' },
                    { type: 'postback', title: 'B', payload: 'b', next: 'node4' }
                ]
            }
        }
    },
    node3: {
        id: 'node3',
        category: 'message',
        payload: { type: 'text', fields: { text: 'You chose A' } }
    },
    node4: {
        id: 'node4',
        category: 'message',
        payload: { type: 'text', fields: { text: 'You chose B' } }
    }
};
