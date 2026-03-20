import axios from 'axios';
import { prisma } from '~/config/prisma';
import { GenericElement, MediaTemplateField, MessageTextField } from '~/types/flows/messages.type';
import { formatMediaUrl } from '~/utils/url';

class FacebookSenderService {
    private readonly GRAPH_API_URL = `https://graph.facebook.com/v19.0/me/messages`;

    private async callSendApi(pageId: string, recipientId: string, messagePayload: object) {
        const page = await prisma.page.findUnique({
            where: { id: pageId },
            select: { pageAccessToken: true }
        });

        if (!page?.pageAccessToken) {
            throw new Error(`Page with ID ${pageId} not found or missing Access Token`);
        }

        const response = await axios.post(
            this.GRAPH_API_URL,
            {
                recipient: { id: recipientId },
                message: messagePayload
            },
            {
                params: { access_token: page.pageAccessToken }
            }
        );

        return response.data;
    }

    async sendTextMessage(flowRecordId: string, pageId: string, senderId: string, field: MessageTextField) {
        if (!field.buttons || field.buttons.length === 0) {
            return this.callSendApi(pageId, senderId, {
                text: field.text
            });
        }

        const formatButtons = field.buttons.slice(0, 3).map((button) => {
            if (button.type === 'postback') {
                const parserPayload = JSON.parse(button.payload as any);

                return {
                    type: 'postback',
                    title: button.title,
                    payload: JSON.stringify({
                        next: parserPayload.next,
                        flowRecordId: flowRecordId
                    })
                };
            }

            return button;
        });

        return this.callSendApi(pageId, senderId, {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'button',
                    text: field.text,
                    buttons: formatButtons
                }
            }
        });
    }

    async sendMediaMessage(pageId: string, senderId: string, type: string, url: string) {
        return this.callSendApi(pageId, senderId, {
            attachment: {
                type: type,
                payload: {
                    url: formatMediaUrl(url)
                }
            }
        });
    }

    async sendMediaTemplateMessage(pageId: string, senderId: string, payload: MediaTemplateField) {
        return this.callSendApi(pageId, senderId, {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'media',
                    elements: [
                        {
                            media_type: payload.attachment_type,
                            url: formatMediaUrl(payload.url),
                            buttons:
                                payload.buttons && payload.buttons.length > 0 ? payload.buttons.slice(0, 3) : undefined
                        }
                    ]
                }
            }
        });
    }

    async sendGenericMessage(pageId: string, senderId: string, elements: GenericElement[]) {
        const formatElements = elements.map((element) => ({
            ...element,
            image_url: formatMediaUrl(element.image_url || '')
        }));

        return this.callSendApi(pageId, senderId, {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'generic',
                    elements: formatElements
                }
            }
        });
    }
}

export default new FacebookSenderService();
