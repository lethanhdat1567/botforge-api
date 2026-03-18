import { flowText } from '~/data/flow';
import facebookSenderService from '~/services/facebook-sender.service';
import flowRecordService from '~/services/flow-record.service';
import { ActionPayloadItem } from '~/types/flows/actions.type';
import { CollectionPayloadItem } from '~/types/flows/collection.type';
import { MessagePayloadItem } from '~/types/flows/messages.type';
import { Node, NodePayloadItem } from '~/types/flows/node.type';

class FlowExecutorService {
    async runFlow(
        flowRecordId: string,
        pageId: string,
        senderId: string,
        startNodeId: string,
        nodes: Record<string, Node>
    ) {
        let currentNodeId: string | null = startNodeId;
        if (!currentNodeId) {
            console.log('Node not found: ', currentNodeId);
        }

        while (currentNodeId) {
            // *Run Node: running
            const currentNode: Node = nodes[currentNodeId];

            if (!currentNode) {
                console.log('Node not found: ', currentNodeId);
            }

            let branchedNextId = null;
            // *Loop payload, when break in here, node didn't complete yet
            for (const payload of currentNode.payload) {
                branchedNextId = (await this.handleNodePayload(pageId, senderId, payload)) as any;

                if (branchedNextId) break;
            }

            if (branchedNextId) {
                currentNodeId = branchedNextId;
            } else if (currentNode.next) {
                currentNodeId = currentNode.next;
            } else {
                // ! Done flow
                currentNodeId = null;
                return await flowRecordService.complete(flowRecordId);
            }
        }
    }

    private async handleNodePayload(pageId: string, senderId: string, payload: NodePayloadItem) {
        switch (payload.category) {
            case 'message': {
                await this.handleMessagePayload(pageId, senderId, payload as MessagePayloadItem);
                break;
            }
            case 'action': {
                this.handleActionPayload(payload as ActionPayloadItem);
                break;
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
                await facebookSenderService.sendTextMessage(pageId, senderId, field.text);

                break;
            }
            case 'video':
            case 'image':
            case 'audio': {
                console.log(`[media]: ${field.url}`);
                break;
            }
            case 'media_template': {
                console.log(`[Media Template]: ${field.attachment_type} - ${field.url}`);
                break;
            }
            case 'generic_template': {
                console.log(`[Generic]: ${field.elements?.length || 0}`);
                break;
            }
        }
    }

    private handleActionPayload(payload: ActionPayloadItem) {
        const { type, field } = payload;

        switch (type) {
            case 'condition': {
                return 'text_next_id';
            }
            case 'delay': {
                console.log(`[delay]: `, field.duration, field.unit);
                break;
            }
            case 'set_variable': {
                console.log(`[set_variable]: `, field.name, field.value);
                break;
            }
        }
    }

    private handleCollectionPayload(payload: CollectionPayloadItem) {
        console.log(`[Collection] Fetching data for type: ${payload.type}`);
    }
}

export const flowExecutorService = new FlowExecutorService();
