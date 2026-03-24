import axios from 'axios';
import { prisma } from '~/config/prisma';
import { formatButtons } from '~/helpers/flow.helper';
import { variableResolverService } from '~/services/variable-resolver.service';
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
        const content = await variableResolverService.resolve(flowRecordId, field.text);

        if (!field.buttons || field.buttons.length === 0) {
            return this.callSendApi(pageId, senderId, {
                text: content
            });
        }

        const filterButtons = await formatButtons(field.buttons, flowRecordId);

        return this.callSendApi(pageId, senderId, {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'button',
                    text: content,
                    buttons: filterButtons
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

    async sendMediaTemplateMessage(
        flowRecordId: string,
        pageId: string,
        senderId: string,
        payload: MediaTemplateField
    ) {
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
                                payload.buttons &&
                                payload.buttons.length > 0 &&
                                (await formatButtons(payload.buttons, flowRecordId))
                        }
                    ]
                }
            }
        });
    }

    async sendGenericMessage(flowRecordId: string, pageId: string, senderId: string, elements: GenericElement[]) {
        const formatElements = await Promise.all(
            elements.map(async (element) => {
                const resolvedTitle = await variableResolverService.resolve(flowRecordId, element.title || '');
                const resolvedSubtitle = await variableResolverService.resolve(flowRecordId, element.subtitle || '');

                let resolvedButtons = undefined;
                if (element.buttons && element.buttons.length > 0) {
                    resolvedButtons = await formatButtons(element.buttons, flowRecordId);
                }

                return {
                    title: resolvedTitle,
                    subtitle: resolvedSubtitle,
                    image_url: formatMediaUrl(element.image_url || ''),
                    default_action: element.default_action,
                    buttons: resolvedButtons
                };
            })
        );

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
