import { ActionField, ActionPayloadItem } from '~/types/flows/actions.type';
import { CollectionField, CollectionPayloadItem } from '~/types/flows/collection.type';
import { MessageField, MessagePayloadItem } from '~/types/flows/messages.type';

export type NodeField = MessageField | ActionField | CollectionField;

export interface Node {
    id: string;
    payload: NodePayloadItem[];
    next?: string;
}

export type NodePayloadItem = MessagePayloadItem | ActionPayloadItem | CollectionPayloadItem;
