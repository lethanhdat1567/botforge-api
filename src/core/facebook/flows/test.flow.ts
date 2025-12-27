import { ActionNode } from '~/core/facebook/engine/types/action';
import { MessageNode } from '~/core/facebook/engine/types/message';

export const mockFlow: Record<string, ActionNode | MessageNode> = {
    start: {
        id: 'start',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: '⏳ Bắt đầu xử lý, vui lòng đợi...'
            }
        },
        children: { next: 'delay' }
    },

    delay: {
        id: 'delay',
        category: 'action',
        payload: {
            type: 'delay',
            fields: {
                duration: '1m',
                next: 'done'
            }
        }
    },

    done: {
        id: 'done',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: '✅ Xử lý xong!'
            }
        }
    }
};
