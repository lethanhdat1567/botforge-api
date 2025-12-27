import { ButtonNode, QuickReply } from '~/core/facebook/engine/types/button';
import {
    CouponTemplateElement,
    GenericTemplateElement,
    MediaTemplateData,
    ReceiptTemplateElement
} from '~/core/facebook/engine/types/message';

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN!;
if (!PAGE_ACCESS_TOKEN) throw new Error('PAGE_ACCESS_TOKEN is not set in .env');

// Kiểu chung cho button/quick reply trong service
export type Button = ButtonNode;

// Hàm gốc gọi Messenger Send API
async function callSendAPI(body: any) {
    try {
        const res = await fetch(`https://graph.facebook.com/v15.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const data = await res.json();
        if (!res.ok) console.error('Send API error:', data);
    } catch (err) {
        console.error('Error calling Send API:', err);
    }
}

// Gửi text message
export async function sendTextMessage(psid: string, text: string) {
    await callSendAPI({
        recipient: { id: psid },
        message: { text }
    });
}

// Gửi button template (có thể dùng cho button node hoặc persistent menu)
export async function sendButtonMessage(psid: string, text: string, buttons: ButtonNode[]) {
    const formattedButtons = buttons
        .map((btn) => {
            if (btn.type === 'postback')
                return { type: 'postback', title: btn.title, payload: JSON.stringify(btn.payload) };
            if (btn.type === 'url') return { type: 'web_url', title: btn.title, url: btn.url };
            return null;
        })
        .filter(Boolean);

    await callSendAPI({
        recipient: { id: psid },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'button',
                    text,
                    buttons: formattedButtons
                }
            }
        }
    });
}

// Gửi quick replies
export async function sendQuickReplies(psid: string, text: string, quickReplies: QuickReply[]) {
    const formatted = quickReplies.map((qr) => ({
        content_type: 'text',
        title: qr.title,
        payload: JSON.stringify(qr.payload)
    }));

    await callSendAPI({
        recipient: { id: psid },
        message: {
            text,
            quick_replies: formatted
        }
    });
}

// Gửi sender action (typing_on, typing_off, mark_seen)
export async function sendSenderAction(psid: string, action: 'typing_on' | 'typing_off' | 'mark_seen') {
    await callSendAPI({
        recipient: { id: psid },
        sender_action: action
    });
}

// Gửi attachment
export async function sendAttachment(psid: string, type: 'image' | 'video' | 'audio' | 'file', url: string) {
    await callSendAPI({
        recipient: { id: psid },
        message: {
            attachment: {
                type: type,
                payload: {
                    url,
                    is_reusable: true
                }
            }
        }
    });
}

export async function sendGenericTemplate(psid: string, elements: GenericTemplateElement[]) {
    // Format buttons trong mỗi element nếu có
    const formattedElements = elements.map((el) => ({
        title: el.title,
        subtitle: el.subtitle,
        image_url: el.image_url,
        default_action: el.default_action,
        buttons: el.buttons
            ?.map((btn) => {
                if (btn.type === 'postback')
                    return { type: 'postback', title: btn.title, payload: JSON.stringify(btn.payload) };
                if (btn.type === 'url') return { type: 'web_url', title: btn.title, url: btn.url };
                return null;
            })
            .filter(Boolean)
    }));

    await callSendAPI({
        recipient: { id: psid },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'generic',
                    elements: formattedElements
                }
            }
        }
    });
}

export async function sendCouponTemplate(psid: string, data: CouponTemplateElement) {
    const payload: any = {
        template_type: 'coupon',
        title: data.title
    };

    if (data.coupon_code) payload.coupon_code = data.coupon_code;
    if (data.coupon_pre_message) payload.coupon_pre_message = data.coupon_pre_message;
    if (data.subtitle) payload.subtitle = data.subtitle;
    if (data.image_url) payload.image_url = data.image_url;
    if (data.coupon_url) {
        payload.coupon_url = data.coupon_url;
        payload.coupon_url_button_title = data.coupon_url_button_title ?? 'Shop now';
    }
    if (data.payload) payload.payload = data.payload;

    await callSendAPI({
        recipient: { id: psid },
        message: {
            attachment: {
                type: 'template',
                payload
            }
        }
    });
}

export async function sendMediaTemplate(psid: string, data: MediaTemplateData['fields']) {
    const element = {
        media_type: data.media_type,
        media_url: data.media_url,
        buttons: data.buttons
            ?.map((btn) => {
                if (btn.type === 'postback')
                    return { type: 'postback', title: btn.title, payload: JSON.stringify(btn.payload) };
                if (btn.type === 'url') return { type: 'web_url', title: btn.title, url: btn.url };
                return null;
            })
            .filter(Boolean)
    };

    await callSendAPI({
        recipient: { id: psid },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'media',
                    elements: [element]
                }
            }
        }
    });
}

export async function sendReceiptTemplate(psid: string, data: ReceiptTemplateElement) {
    // Format các product elements
    const formattedElements = data.elements.map((el) => ({
        title: el.title,
        subtitle: el.subtitle,
        quantity: el.quantity,
        price: el.price,
        currency: el.currency,
        image_url: el.image_url
    }));

    // Format address nếu có
    const formattedAddress = data.address
        ? {
              street_1: data.address.street_1,
              street_2: data.address.street_2,
              city: data.address.city,
              postal_code: data.address.postal_code,
              state: data.address.state,
              country: data.address.country
          }
        : undefined;

    // Format adjustments nếu có
    const formattedAdjustments = data.adjustments?.map((adj) => ({
        name: adj.name,
        amount: adj.amount
    }));

    // Build payload Messenger
    const payload: any = {
        template_type: 'receipt',
        recipient_name: data.recipient_name,
        order_number: data.order_number,
        currency: data.currency,
        payment_method: data.payment_method,
        timestamp: data.timestamp,
        elements: formattedElements,
        address: formattedAddress,
        summary: {
            subtotal: data.summary.subtotal,
            shipping_cost: data.summary.shipping_cost,
            total_tax: data.summary.total_tax,
            total_cost: data.summary.total_cost
        },
        adjustments: formattedAdjustments
    };

    await callSendAPI({
        recipient: { id: psid },
        message: {
            attachment: {
                type: 'template',
                payload
            }
        }
    });
}
