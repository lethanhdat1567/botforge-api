import { DelayField } from '~/types/flows/actions.type';
import { AnyButton } from '~/types/flows/base.type';

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
    buttons?: AnyButton[];
}
