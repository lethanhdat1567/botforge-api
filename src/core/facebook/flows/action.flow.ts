import { Node } from '~/core/facebook/engine/types/node';

export const delayFlow: Record<string, Node> = {
    // Node 1: start message
    start: {
        id: 'start',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: 'Flow bắt đầu. Sẽ delay 5 giây trước khi gửi message tiếp theo...'
            }
        },
        children: { next: 'delayNode' }
    },

    // Node 2: action - delay 5 giây
    delayNode: {
        id: 'delayNode',
        category: 'action',
        payload: {
            type: 'delay',
            fields: {
                duration: '5s', // 5 giây
                next: 'endMessage'
            }
        }
    },

    // Node 3: end message
    endMessage: {
        id: 'endMessage',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: 'Delay đã xong. Flow kết thúc.'
            }
        }
    }
};
