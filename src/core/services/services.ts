import { ButtonNode, QuickReply } from '~/core/engine/types/button';

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
