import { Node } from '~/core/facebook/engine/types/node';

export const collectionFlow: Record<string, Node> = {
    // Node 1: start message
    start: {
        id: 'start',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: 'Xin chào! Hãy cung cấp email của bạn.'
            }
        },
        children: { next: 'askEmail' }
    },

    // Node 2: collection - ask for email
    askEmail: {
        id: 'askEmail',
        category: 'collection',
        payload: {
            type: 'collection',
            fields: {
                text: 'Vui lòng nhập email của bạn:',
                buttons: [],
                variable: {
                    type: 'email',
                    key: 'user_email',
                    fallback: 'Email không hợp lệ. Vui lòng thử lại.',
                    timeout: '60s'
                }
            }
        },
        children: { next: 'thankYou' }
    },

    // Node 3: thank you message
    thankYou: {
        id: 'thankYou',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: 'Cảm ơn bạn! Chúng tôi đã ghi nhận email của bạn.'
            }
        }
    }
};
