import { Node } from '~/types/flows/node.type';

export const flowText: Record<string, Node> = {
    welcome_node: {
        id: 'welcome_node',
        payload: [
            {
                category: 'action',
                type: 'set_variable',
                field: { name: 'user_intent', value: 'browsing_shoes' }
            },
            {
                category: 'message',
                type: 'text',
                field: {
                    text: 'Chào mừng Đạt đến với Shoe Shop! 👟',
                    buttons: []
                }
            }
        ],
        next: 'delay_node'
    },

    delay_node: {
        id: 'delay_node',
        payload: [
            {
                category: 'action',
                type: 'delay',
                field: { duration: 2, unit: 's' }
            }
        ],
        next: 'media_node'
    },

    media_node: {
        id: 'media_node',
        payload: [
            {
                category: 'message',
                type: 'image',
                field: { url: 'https://your-shop.com/sneaker.jpg' }
            },
            {
                category: 'message',
                type: 'text',
                field: {
                    text: 'Bạn thấy mẫu này thế nào?',
                    buttons: [
                        { type: 'postback', title: 'Xem chi tiết', payload: 'view_details' },
                        { type: 'postback', title: 'Mua ngay', payload: 'buy_now' }
                    ]
                }
            }
        ],
        next: 'collection_node'
    },

    collection_node: {
        id: 'collection_node',
        payload: [
            {
                category: 'collection',
                type: 'text',
                fields: {
                    text: 'Vui lòng để lại số điện thoại để nhận khuyến mãi:',
                    variable: {
                        key: 'phone_number',
                        regex: '^[0-9]{10}$',
                        regexMessage: 'Số điện thoại không hợp lệ, vui lòng nhập lại!'
                    },
                    fallback: {
                        timeout: { duration: 1, unit: 'm' },
                        message: 'Bạn đã hết thời gian nhập số điện thoại.'
                    }
                }
            }
        ]
    }
};
