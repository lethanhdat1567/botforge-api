export type CollectionType = 'collection';

export type CollectionVariableType = 'text' | 'number' | 'email' | 'phone' | 'custom';

export interface CollectionData {
    type: CollectionType;
    fields: {
        type: CollectionVariableType;
        key: string;
        value?: any;
        regex?: string;
        fallback: string;
        timeout: string;
    };
}

export interface CollectionNode {
    id: string;
    category: 'collection';
    payload: CollectionData;
    children?: Record<string, string>;
}
