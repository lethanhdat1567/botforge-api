import { ButtonNode, QuickReply } from '~/core/facebook/engine/types/button';
import {
    CouponTemplateElement,
    GenericTemplateElement,
    ReceiptTemplateElement
} from '~/core/facebook/engine/types/message';
import { renderContent } from '~/core/facebook/helpers';
import { mapButtonsToFacebook } from '~/core/facebook/services/helpers';
import flowModel from '~/models/flow.model';
import { getStaticUrl } from '~/utils/url';

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN!;
if (!PAGE_ACCESS_TOKEN) throw new Error('PAGE_ACCESS_TOKEN is not set in .env');

// Kiểu chung cho button/quick reply trong service
export type Button = ButtonNode;

// Hàm gốc gọi Messenger Send API
async function callSendAPI(pageId: string, body: any) {
    const flowData = await flowModel.findByPageId(pageId);

    const access_token = flowData?.pageAccessToken;

    if (!access_token) {
        throw new Error('Access token not found for pageId: ' + body.recipient.id);
    }

    try {
        const res = await fetch(`https://graph.facebook.com/v15.0/me/messages?access_token=${access_token}`, {
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
export async function sendTextMessage(psid: string, pageId: string, text: string) {
    await callSendAPI(pageId, {
        recipient: { id: psid },
        message: { text: renderContent(text, pageId, psid) }
    });
}

// Gửi button template (có thể dùng cho button node hoặc persistent menu)
export async function sendButtonMessage(psid: string, pageId: string, text: string, buttons: ButtonNode[]) {
    const formattedButtons = mapButtonsToFacebook(buttons, pageId, psid);

    await callSendAPI(pageId, {
        recipient: { id: psid },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'button',
                    text: renderContent(text, pageId, psid),
                    buttons: formattedButtons
                }
            }
        }
    });
}

// Gửi quick replies
export async function sendQuickReplies(psid: string, pageId: string, text: string, quickReplies: QuickReply[]) {
    const formatted = quickReplies.map((qr) => ({
        content_type: 'text',
        title: renderContent(qr.title, pageId, psid),
        payload: JSON.stringify(qr.payload)
    }));

    await callSendAPI(pageId, {
        recipient: { id: psid },
        message: {
            text: renderContent(text, pageId, psid),
            quick_replies: formatted
        }
    });
}

// Gửi sender action (typing_on, typing_off, mark_seen)
export async function sendSenderAction(psid: string, pageId: string, action: 'typing_on' | 'typing_off' | 'mark_seen') {
    await callSendAPI(pageId, {
        recipient: { id: psid },
        sender_action: action
    });
}

// Gửi attachment
export async function sendAttachment(
    psid: string,
    pageId: string,
    type: 'image' | 'video' | 'audio' | 'file',
    url: string
) {
    await callSendAPI(pageId, {
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

export async function sendGenericTemplate(psid: string, pageId: string, elements: GenericTemplateElement[]) {
    // Format buttons trong mỗi element nếu có
    const formattedElements = elements.map((el) => ({
        title: renderContent(el.title, pageId, psid),
        subtitle: renderContent(el.subtitle || '', pageId, psid),
        image_url: encodeURI(getStaticUrl(el.image_url) || ''),
        default_action: el.default_action,
        buttons: mapButtonsToFacebook(el.buttons, pageId, psid)
    }));

    await callSendAPI(pageId, {
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

export async function sendCouponTemplate(psid: string, pageId: string, data: CouponTemplateElement) {
    const payload: any = {
        template_type: 'coupon',
        title: renderContent(data.title, pageId, psid)
    };

    if (data.coupon_code) payload.coupon_code = data.coupon_code;

    if (data.coupon_pre_message) payload.coupon_pre_message = renderContent(data.coupon_pre_message, pageId, psid);

    if (data.subtitle) payload.subtitle = renderContent(data.subtitle, pageId, psid);

    if (data.image_url) payload.image_url = data.image_url;

    if (data.coupon_url) {
        payload.coupon_url = data.coupon_url;
        payload.coupon_url_button_title = renderContent(data.coupon_url_button_title ?? 'Shop now', pageId, psid);
    }

    if (data.payload) payload.payload = data.payload;

    await callSendAPI(pageId, {
        recipient: { id: psid },
        message: {
            attachment: {
                type: 'template',
                payload
            }
        }
    });
}

export async function sendMediaTemplate(
    psid: string,
    pageId: string,
    data: {
        media_type: 'image' | 'video';
        attachment_id: string;
        buttons: ButtonNode[];
    }
) {
    await callSendAPI(pageId, {
        recipient: { id: psid },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'media',
                    elements: [
                        {
                            media_type: data.media_type,
                            attachment_id: data.attachment_id,
                            buttons: mapButtonsToFacebook(data.buttons, pageId, psid)
                        }
                    ]
                }
            }
        }
    });
}

export async function uploadMediaFromUrl(type: 'image' | 'video', pageId: string, url: string): Promise<string> {
    const safeUrl = encodeURI(url);

    const res = await fetch(
        `https://graph.facebook.com/v15.0/me/message_attachments?access_token=${PAGE_ACCESS_TOKEN}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: {
                    attachment: {
                        type,
                        payload: {
                            url: safeUrl,
                            is_reusable: true
                        }
                    }
                }
            })
        }
    );

    const data = await res.json();

    if (!res.ok) {
        console.error('Upload media error:', data);
        throw new Error('Upload media failed');
    }

    return data.attachment_id;
}

export async function sendReceiptTemplate(psid: string, pageId: string, data: ReceiptTemplateElement) {
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

    await callSendAPI(pageId, {
        recipient: { id: psid },
        message: {
            attachment: {
                type: 'template',
                payload
            }
        }
    });
}
