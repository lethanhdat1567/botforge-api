export interface DelayField {
    unit: 's' | 'm' | 'h';
    duration: number;
}

export interface SetVariableField {
    name: string;
    value: string;
}

export interface ConditionItem {
    field: string;
    value: string;
}

export interface ConditionField {
    items: ConditionItem[];
    next?: string;
}

export type ActionPayloadItem =
    | { category: 'action'; type: 'delay'; field: DelayField }
    | { category: 'action'; type: 'set_variable'; field: SetVariableField }
    | { category: 'action'; type: 'condition'; field: ConditionField };

export type ActionField = DelayField | SetVariableField | ConditionField;
