import { ActionNode } from '~/core/engine/types/action';
import { MessageNode } from '~/core/engine/types/message';

export const mockFlow: Record<string, ActionNode | MessageNode> = {
    // Node 1: message mở đầu
    start: {
        id: 'start',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: 'Action test started. Waiting 10 seconds...'
            }
        },
        children: { next: 'delay10s' }
    },

    // Node 2: delay 10s
    delay10s: {
        id: 'delay10s',
        category: 'action',
        payload: {
            type: 'delay',
            fields: {
                duration: '10s', // 10s
                next: 'setFlag'
            }
        }
    },

    // Node 3: set variable
    setFlag: {
        id: 'setFlag',
        category: 'action',
        payload: {
            type: 'set_variable',
            fields: {
                key: 'delayed',
                value: 'true',
                next: 'checkFlag'
            }
        }
    },

    // Node 4: condition check
    checkFlag: {
        id: 'checkFlag',
        category: 'action',
        payload: {
            type: 'condition',
            fields: {
                items: [
                    {
                        conditions: [
                            {
                                field: 'delayed',
                                operator: 'equals',
                                value: 'true'
                            }
                        ],
                        next: 'success'
                    }
                ],
                defaultNext: 'fail'
            }
        }
    },

    // Node 5: success message
    success: {
        id: 'success',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: '✅ Delay done! Variable was set successfully.'
            }
        }
    },

    // Node 6: fail message
    fail: {
        id: 'fail',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: '❌ Condition failed.'
            }
        }
    }
};
