import { ButtonNode } from '~/core/facebook/engine/types/button';

export type CollectionType = 'collection';

export type CollectionVariableType = 'text' | 'number' | 'email' | 'phone' | 'custom';

export interface CollectionData {
    type: CollectionType;
    fields: {
        text: string;
        buttons: ButtonNode[];
        variable: {
            type: CollectionVariableType;
            key: string;
            value?: any;
            regex?: string;
            fallback: string;
            timeout: {
                duration: number;
                unit: 'second' | 'minute' | 'hour';
            };
        };
    };
}

export interface CollectionNode {
    id: string;
    category: 'collection';
    payload: CollectionData;
    children?: Record<string, string>;
}
