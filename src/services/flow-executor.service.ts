import facebookSenderService from '~/services/facebook-sender.service';
import flowRecordService from '~/services/flow-record.service';
import { ActionPayloadItem, ConditionField } from '~/types/flows/actions.type';
import { CollectionPayloadItem, WaitingVariable } from '~/types/flows/collection.type';
import { MessagePayloadItem } from '~/types/flows/messages.type';
import { Node, NodePayloadItem } from '~/types/flows/node.type';
import { sleep } from '~/utils/time';
import { formatMediaUrl } from '~/utils/url';

type PayloadResult = { type: 'CONTINUE'; nextNodeId?: string } | { type: 'WAITING' } | { type: 'NONE' };

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
                // *[Flow Record]: Update current node
                await flowRecordService.updateCurrentNode(flowRecordId, currentNodeId);

                const currentNode: Node = nodes[currentNodeId];

                if (!currentNode) {
                    throw new Error(`Node not found: ${currentNodeId}`);
                }

                let branchedNextId = null;
                let isPending = false;

                // *[PAYLOAD]: Handle loop payload
                for (const payload of currentNode.payload || []) {
                    const payloadResult = (await this.handleNodePayload(flowRecordId, pageId, senderId, payload)) || {};

                    if (payloadResult.type === 'CONTINUE') {
                        branchedNextId = payloadResult.nextNodeId;
                    } else if (payloadResult.type === 'WAITING') {
                        isPending = true;
                    }

                    if (branchedNextId || isPending) break;
                }

                if (branchedNextId) {
                    currentNodeId = branchedNextId;
                } else if (currentNode.next && !isPending) {
                    currentNodeId = currentNode.next;
                } else if (isPending) {
                    return;
                } else {
                    currentNodeId = null;
                    isPending = false;
                    return await flowRecordService.setComplete(flowRecordId);
                }
            }
        } catch (error: any) {
            console.log(error);

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

    private async handleNodePayload(
        flowRecordId: string,
        pageId: string,
        senderId: string,
        payload: NodePayloadItem
    ): Promise<PayloadResult> {
        switch (payload.category) {
            case 'message': {
                await this.handleMessagePayload(flowRecordId, pageId, senderId, payload as MessagePayloadItem);
                return { type: 'NONE' };
            }
            case 'action': {
                return await this.handleActionPayload(flowRecordId, payload as ActionPayloadItem);
            }
            case 'collection': {
                return this.handleCollectionPayload(flowRecordId, pageId, senderId, payload as CollectionPayloadItem);
            }
            default: {
                console.log('Invalid Category: ', (payload as any).category);
                return { type: 'NONE' };
            }
        }
    }

    private async handleMessagePayload(
        flowRecordId: string,
        pageId: string,
        senderId: string,
        payload: MessagePayloadItem
    ) {
        const { type, field } = payload;

        switch (type) {
            case 'text': {
                await facebookSenderService.sendTextMessage(flowRecordId, pageId, senderId, {
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
                await facebookSenderService.sendMediaTemplateMessage(flowRecordId, pageId, senderId, {
                    attachment_type: field.attachment_type,
                    buttons: field.buttons,
                    url: formatMediaUrl(field.url)
                });
                break;
            }
            case 'generic_template': {
                await facebookSenderService.sendGenericMessage(flowRecordId, pageId, senderId, field.elements);
                break;
            }
        }
    }

    private async handleActionPayload(flowRecordId: string, payload: ActionPayloadItem): Promise<PayloadResult> {
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

                return isMatch ? { type: 'CONTINUE', nextNodeId: next } : { type: 'NONE' };
            }
            case 'delay': {
                await sleep(field.duration, field.unit);
                return { type: 'NONE' };
            }
            case 'set_variable': {
                flowRecordService.setVariable(flowRecordId, field.name, field.value);
                return { type: 'NONE' };
            }
        }
    }

    private async handleCollectionPayload(
        flowRecordId: string,
        pageId: string,
        senderId: string,
        payload: CollectionPayloadItem
    ): Promise<PayloadResult> {
        const message = payload.field.text;
        const buttons = payload.field.buttons;

        await facebookSenderService.sendTextMessage(flowRecordId, pageId, senderId, { text: message, buttons });

        const variable = payload.field.variable;
        const fallback = payload.field.fallback;

        const waitingVariable: WaitingVariable = {
            variable,
            fallback
        };

        await flowRecordService.setPendingVariable(flowRecordId, waitingVariable);

        return { type: 'WAITING' };
    }
}

export const flowExecutorService = new FlowExecutorService();
