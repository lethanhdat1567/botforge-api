import facebookSenderService from '~/services/facebook-sender.service';
import flowRecordService from '~/services/flow-record.service';
import { ActionPayloadItem, ConditionField } from '~/types/flows/actions.type';
import { CollectionPayloadItem } from '~/types/flows/collection.type';
import { MessagePayloadItem } from '~/types/flows/messages.type';
import { Node, NodePayloadItem } from '~/types/flows/node.type';
import { sleep } from '~/utils/time';
import { formatMediaUrl } from '~/utils/url';

class FlowExecutorService {
    async runFlow(
        flowRecordId: string,
        pageId: string,
        senderId: string,
        startNodeId: string,
        nodes: Record<string, Node>
    ) {
        let currentNodeId: string | null = startNodeId;

        try {
            if (!currentNodeId) {
                throw new Error('Start Node ID is missing');
            }

            while (currentNodeId) {
                const currentNode: Node = nodes[currentNodeId];

                if (!currentNode) {
                    throw new Error(`Node not found: ${currentNodeId}`);
                }

                let branchedNextId = null;

                for (const payload of currentNode.payload) {
                    branchedNextId = (await this.handleNodePayload(flowRecordId, pageId, senderId, payload)) as any;
                    if (branchedNextId) break;
                }

                if (branchedNextId) {
                    currentNodeId = branchedNextId;
                } else if (currentNode.next) {
                    currentNodeId = currentNode.next;
                } else {
                    currentNodeId = null;
                    // Hoàn thành Flow thành công
                    return await flowRecordService.setComplete(flowRecordId);
                }
            }
        } catch (error: any) {
            if (error.response) {
                const fbError = error.response.data.error;
                flowRecordService.setError(
                    flowRecordId,
                    `${fbError.message} (Type: ${fbError.type}, Code: ${fbError.code})`
                );
            } else if (error.request) {
                flowRecordService.setError(flowRecordId, `No response received from Facebook`);
            } else {
                flowRecordService.setError(flowRecordId, error.message);
            }
        }
    }

    private async handleNodePayload(flowRecordId: string, pageId: string, senderId: string, payload: NodePayloadItem) {
        switch (payload.category) {
            case 'message': {
                await this.handleMessagePayload(pageId, senderId, payload as MessagePayloadItem);
                break;
            }
            case 'action': {
                const conditionNextNodeId = await this.handleActionPayload(flowRecordId, payload as ActionPayloadItem);
                return conditionNextNodeId;
            }
            case 'collection': {
                this.handleCollectionPayload(payload as CollectionPayloadItem);
                break;
            }
            default: {
                console.log('Invalid Category: ', (payload as any).category);
                break;
            }
        }
    }

    private async handleMessagePayload(pageId: string, senderId: string, payload: MessagePayloadItem) {
        const { type, field } = payload;

        switch (type) {
            case 'text': {
                await facebookSenderService.sendTextMessage(pageId, senderId, {
                    text: field.text,
                    buttons: field.buttons
                });

                break;
            }
            case 'video':
            case 'image':
            case 'audio': {
                await facebookSenderService.sendMediaMessage(pageId, senderId, type, field.url);
                break;
            }
            case 'media_template': {
                await facebookSenderService.sendMediaTemplateMessage(pageId, senderId, {
                    attachment_type: field.attachment_type,
                    buttons: field.buttons,
                    url: formatMediaUrl(field.url)
                });
                break;
            }
            case 'generic_template': {
                await facebookSenderService.sendGenericMessage(pageId, senderId, field.elements);
                break;
            }
        }
    }

    private async handleActionPayload(flowRecordId: string, payload: ActionPayloadItem) {
        const { type, field } = payload;

        switch (type) {
            case 'condition': {
                const { items, next } = field as ConditionField;
                const variables = (await flowRecordService.getVariables(flowRecordId)) as Record<string, any>;

                const isMatch = items.every((item) => {
                    const actualValue = variables[item.field];
                    const expectedValue = item.value;

                    return String(actualValue) === String(expectedValue);
                });

                if (isMatch && next) {
                    return next;
                }

                return null;
            }
            case 'delay': {
                await sleep(field.duration, field.unit);
                break;
            }
            case 'set_variable': {
                flowRecordService.setVariable(flowRecordId, field.name, field.value);
                break;
            }
        }
    }

    private handleCollectionPayload(payload: CollectionPayloadItem) {
        console.log(`[Collection] Fetching data for type: ${payload.type}`);
    }
}

export const flowExecutorService = new FlowExecutorService();
