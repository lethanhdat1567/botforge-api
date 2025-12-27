import { ActionNode } from '~/core/facebook/engine/types/action';
import { MessageNode } from '~/core/facebook/engine/types/message';

export const mockFlow: Record<string, ActionNode | MessageNode> = {
    start: {
        id: 'start',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: '👋 Xin chào! Bạn muốn được hỗ trợ về dịch vụ nào?'
            }
        },
        children: { next: 'choose_service' }
    },

    choose_service: {
        id: 'choose_service',
        category: 'message',
        payload: {
            type: 'button',
            fields: {
                text: 'Chọn một trong các dịch vụ bên dưới:',
                buttons: [
                    { type: 'postback', title: 'Thanh toán', payload: { next: 'payment_info' } },
                    { type: 'postback', title: 'Hỗ trợ kỹ thuật', payload: { next: 'tech_support' } },
                    { type: 'postback', title: 'Khác', payload: { next: 'other_info' } }
                ]
            }
        }
    },

    payment_info: {
        id: 'payment_info',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: '💳 Bạn muốn thanh toán bằng phương thức nào? Chúng tôi có: Thẻ, Ví điện tử, Chuyển khoản.'
            }
        },
        children: { next: 'done' }
    },

    tech_support: {
        id: 'tech_support',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: '🛠 Vui lòng mô tả vấn đề kỹ thuật bạn gặp phải, chúng tôi sẽ liên hệ sớm nhất!'
            }
        },
        children: { next: 'done' }
    },

    other_info: {
        id: 'other_info',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: 'ℹ️ Chúng tôi sẽ ghi nhận yêu cầu của bạn và phản hồi nhanh nhất có thể.'
            }
        },
        children: { next: 'done' }
    },

    done: {
        id: 'done',
        category: 'message',
        payload: {
            type: 'text',
            fields: {
                text: '✅ Cảm ơn bạn đã liên hệ! Chúc bạn một ngày tốt lành.'
            }
        }
    }
};
