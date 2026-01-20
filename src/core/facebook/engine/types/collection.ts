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
            fallback: {
                mode: 'default' | 'custom';
                value: string;
            };
            timeout: {
                duration: number;
                unit: 'second' | 'minute' | 'hour';
                mode: 'default' | 'custom';
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
