import { DelayField } from '~/types/flows/actions.type';
import { PostbackButton } from '~/types/flows/base.type';

export interface CollectionField {
    text: string;
    buttons?: PostbackButton[];
    variable: {
        key: string;
        regex?: string;
        regexMessage?: string;
    };
    fallback: {
        timeout: DelayField;
        message: string;
    };
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
    field: CollectionField;
};
