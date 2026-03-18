import { DelayField } from '~/types/flows/actions.type';
import { PostbackButton } from '~/types/flows/base.type';

export interface CollectionField {
    text: string;
    variable: {
        key: string;
        regex?: string;
        regexMessage?: string;
    };
    fallback: {
        timeout: DelayField;
        message: string;
    };
    buttons?: PostbackButton[];
}

export type WaitingVariable = {
    variable: {
        key: string;
        regex?: string;
        regexMessage?: string;
    };
    fallback: {
        timeout: DelayField;
        message: string;
    };
};

export type CollectionPayloadItem = {
    category: 'collection';
    type: 'text';
    fields: CollectionField;
};
