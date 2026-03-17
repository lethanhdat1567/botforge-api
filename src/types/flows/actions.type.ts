import { AnyButton } from '~/types/flows/base.type';
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
    operator: 'equals' | 'contains' | 'exists';
    value: string;
}

export interface ConditionField {
    items: ConditionItem[];
    next?: string;
}
