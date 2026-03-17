import { NodeCategory, MessagePayloadType, ActionPayloadType } from './base.type';
import * as Messages from './messages.type';
import * as Action from './actions.type';
import * as Collection from './collection.type';

export type NodeField =
    | Messages.MessageTextField
    | Messages.MediaField
    | Messages.MediaTemplateField
    | Messages.GenericTemplateField
    | Action.DelayField
    | Action.SetVariableField
    | Action.ConditionField
    | Collection.CollectionField;

export interface NodePayloadItem {
    category: NodeCategory;
    type: MessagePayloadType | ActionPayloadType | 'collection';
    fields: NodeField;
}

export interface Node {
    id: string;
    payload: NodePayloadItem[];
    children: {
        next: string;
    };
}
