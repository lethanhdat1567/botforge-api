import { ActionNode } from '~/core/facebook/engine/types/action';
import { MessageNode } from '~/core/facebook/engine/types/message';
import { CollectionNode } from '~/core/facebook/engine/types/collection';

export const mockFlow: Record<string, ActionNode | MessageNode | CollectionNode> = {
    start: {
        id: 'start',
        category: 'message',
        payload: [
            {
                type: 'text',
                fields: { text: 'Xin chào 👋' }
            },
            {
                type: 'text',
                fields: { text: 'Mình là bot test message node.' }
            }
        ],
        children: { next: 'showOptions' }
    },

    showOptions: {
        id: 'showOptions',
        category: 'message',
        payload: [
            {
                type: 'text',
                fields: { text: 'Bạn muốn tiếp tục theo cách nào?' }
            },
            {
                type: 'button',
                fields: {
                    text: 'Chọn một tuỳ chọn:',
                    buttons: [
                        { type: 'postback', title: 'Option A', payload: { next: 'afterChoice' } },
                        { type: 'postback', title: 'Option B', payload: { next: 'afterChoice' } }
                    ]
                }
            }
        ]
    },

    afterChoice: {
        id: 'afterChoice',
        category: 'message',
        payload: [
            {
                type: 'text',
                fields: { text: 'Bạn cảm thấy trải nghiệm này thế nào?' }
            },
            {
                type: 'quick_replies',
                fields: {
                    text: 'Chọn nhanh nhé:',
                    quickReplies: [
                        { title: 'Quick 1', payload: {} },
                        { title: 'Quick 2', payload: {} }
                    ]
                }
            }
        ],
        children: { next: 'askEmail' }
    },

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
        children: { next: 'checkEmail' }
    },

    checkEmail: {
        id: 'checkEmail',
        category: 'action',
        payload: [
            {
                type: 'condition',
                fields: {
                    items: [
                        {
                            conditions: [
                                {
                                    field: 'user_email',
                                    operator: 'regex',
                                    value: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'
                                }
                            ],
                            next: 'thankYou'
                        },
                        {
                            conditions: [{ field: 'user_email', operator: 'equals', value: null }],
                            next: 'askEmailAgain'
                        }
                    ]
                }
            }
        ]
    },

    askEmailAgain: {
        id: 'askEmailAgain',
        category: 'message',
        payload: [
            {
                type: 'text',
                fields: { text: 'Email bạn nhập không hợp lệ. Vui lòng thử lại.' }
            }
        ],
        children: { next: 'askEmail' }
    },

    thankYou: {
        id: 'thankYou',
        category: 'message',
        payload: [
            {
                type: 'text',
                fields: { text: 'Cảm ơn bạn! Email của bạn đã được lưu.' }
            }
        ],
        children: { next: 'showOrder' }
    },

    showOrder: {
        id: 'showOrder',
        category: 'message',
        payload: [
            {
                type: 'text',
                fields: { text: 'Email của bạn là: {{user_email}}' }
            }
        ]
    }
};
