import { Node } from '~/core/facebook/engine/types/node';
import { ButtonNode } from '~/core/facebook/engine/types/button';

export const testTemplateFlow: Record<string, Node> = {
    start: {
        id: 'start',
        category: 'message',
        payload: {
            type: 'sender_actions',
            fields: { action: 'typing_on' }
        },
        children: { next: 'generic_template' }
    },
    generic_template: {
        id: 'generic_template',
        category: 'message',
        payload: {
            type: 'generic_template',
            fields: {
                elements: [
                    {
                        title: 'Sản phẩm A',
                        subtitle: 'Giá: 100k',
                        image_url: 'https://via.placeholder.com/150',
                        default_action: {
                            type: 'web_url',
                            url: 'https://example.com/product/A',
                            webview_height_ratio: 'tall'
                        },
                        buttons: [
                            { type: 'postback', title: 'Mua ngay', payload: { productId: 'A' } } as ButtonNode,
                            { type: 'url', title: 'Xem chi tiết', url: 'https://example.com/product/A' } as ButtonNode
                        ]
                    },
                    {
                        title: 'Sản phẩm B',
                        subtitle: 'Giá: 200k',
                        image_url: 'https://via.placeholder.com/150',
                        default_action: {
                            type: 'web_url',
                            url: 'https://example.com/product/B',
                            webview_height_ratio: 'tall'
                        },
                        buttons: [
                            { type: 'postback', title: 'Mua ngay', payload: { productId: 'B' } } as ButtonNode,
                            { type: 'url', title: 'Xem chi tiết', url: 'https://example.com/product/B' } as ButtonNode
                        ]
                    }
                ]
            }
        },
        children: { next: 'coupon_template' }
    },
    coupon_template: {
        id: 'coupon_template',
        category: 'message',
        payload: {
            type: 'coupon_template',
            fields: {
                title: 'Giảm giá đặc biệt',
                coupon_code: 'SALE20',
                coupon_pre_message: 'Sử dụng mã giảm giá 20% cho đơn hàng tiếp theo!',
                subtitle: 'Áp dụng đến hết 31/12',
                image_url: 'https://via.placeholder.com/150',
                coupon_url: 'https://example.com/shop',
                coupon_url_button_title: 'Mua ngay'
            }
        },
        children: { next: 'media_template' }
    },
    media_template: {
        id: 'media_template',
        category: 'message',
        payload: {
            type: 'media_template',
            fields: {
                media_type: 'image',
                media_url: 'https://via.placeholder.com/300',
                buttons: [{ type: 'url', title: 'Xem hình ảnh', url: 'https://example.com/media' } as ButtonNode]
            }
        },
        children: { next: 'receipt_template' }
    },
    receipt_template: {
        id: 'receipt_template',
        category: 'message',
        payload: {
            type: 'receipt_template',
            fields: {
                recipient_name: 'Nguyen Van A',
                order_number: 'ORD12345',
                currency: 'VND',
                payment_method: 'Cash',
                timestamp: new Date().getTime().toString(),
                elements: [
                    { title: 'Sản phẩm A', quantity: 1, price: 100000 },
                    { title: 'Sản phẩm B', quantity: 2, price: 200000 }
                ],
                summary: { subtotal: 500000, shipping_cost: 20000, total_tax: 30000, total_cost: 550000 }
            }
        },
        children: { next: 'quick_replies' }
    },
    quick_replies: {
        id: 'quick_replies',
        category: 'message',
        payload: {
            type: 'quick_replies',
            fields: {
                text: 'Bạn muốn xem thêm sản phẩm nào?',
                quickReplies: [
                    { title: 'Sản phẩm C', payload: { key: 'productId', value: 'C' } },
                    { title: 'Sản phẩm D', payload: { key: 'productId', value: 'D' } }
                ]
            }
        },
        children: { next: 'end' }
    },
    end: {
        id: 'end',
        category: 'message',
        payload: {
            type: 'sender_actions',
            fields: { action: 'typing_off' }
        }
    }
};
