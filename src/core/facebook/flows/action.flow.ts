import { ActionNode } from '~/core/facebook/engine/types/action';

export const actionFlow: Record<string, ActionNode> = {
    // Node 1: kiểm tra email hợp lệ hay không
    checkEmail: {
        id: 'checkEmail',
        category: 'action',
        payload: [
            {
                type: 'condition',
                fields: {
                    items: [
                        {
                            // Case 1: email tồn tại và đúng format
                            conditions: [
                                {
                                    field: 'variable.user_email',
                                    operator: 'regex',
                                    value: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'
                                }
                            ],
                            next: 'saveEmail'
                        },
                        {
                            // Case 2: email rỗng hoặc sai
                            conditions: [
                                {
                                    field: 'email',
                                    operator: 'equals',
                                    value: 'dat'
                                }
                            ],
                            next: 'saveEmail'
                        }
                    ]
                }
            }
        ]
    },

    // Node 2: delay giả lập typing
    saveEmail: {
        id: 'saveEmail',
        category: 'action',
        payload: [
            {
                type: 'delay',
                fields: {
                    duration: '1s' // 1s
                }
            },
            {
                type: 'set_variable',
                fields: {
                    key: 'email_saved',
                    value: true
                }
            }
        ],
        children: {
            next: 'thankYouMessage'
        }
    },

    // Node 3: email không hợp lệ → hỏi lại
    askEmailAgain: {
        id: 'askEmailAgain',
        category: 'action',
        payload: [
            {
                type: 'delay',
                fields: {
                    duration: '5s'
                }
            },
            {
                type: 'set_variable',
                fields: {
                    key: 'email_error',
                    value: 'INVALID_EMAIL'
                }
            }
        ],
        children: {}
    }
};
