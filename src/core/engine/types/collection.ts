export type CollectionType = 'collection';

export type CollectionVariableType = 'text' | 'number' | 'email' | 'phone' | 'custom';

export interface CollectionVariable {
    key: string;
    type?: CollectionVariableType;
    value?: any;
    regex?: string;
}

export interface CollectionData {
    type: CollectionType;
    fields: {
        variables: CollectionVariable[];
        next?: string;
    };
}

export interface CollectionNode {
    id: string;
    category: 'collection';
    payload: CollectionData;
    children?: Record<string, string>;
}
