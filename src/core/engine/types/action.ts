//  Action node

export type ActionType = 'condition' | 'delay' | 'set_variable';

export type ActionData = ConditionActionData | DelayActionData | SetVariableActionData;

export interface ActionNode {
    id: string;
    category: 'action';
    payload: ActionData;
    children?: Record<string, string>;
}

// Condition node
export interface ConditionActionData {
    type: 'condition';
    fields: {
        items: {
            conditions: {
                field: string; // payload, variable, ...
                operator: 'equals' | 'not_equals' | 'contains' | 'regex';
                value: any;
            }[];
            next: string; // nodeId nếu tất cả điều kiện trong item thỏa
        }[];
        defaultNext?: string; // nodeId nếu không có item nào thỏa
    };
}

// Delay node
export interface DelayActionData {
    type: 'delay';
    fields: {
        duration: string; // ms
        next: string; // node tiếp theo
    };
}

// Set Variable node
export interface SetVariableActionData {
    type: 'set_variable';
    fields: {
        key: string;
        value: any;
        next?: string; // node tiếp theo
    };
}
