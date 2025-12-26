import { CollectionVariableType } from '~/core/engine/types/collection';

export class PendingVariable {
    type: CollectionVariableType;
    key: string;
    regex?: string;
    fallback?: string;
    timeout?: number;
    value?: string;

    constructor(params: {
        key: string;
        regex?: string;
        fallback?: string;
        timeout?: number;
        type: CollectionVariableType;
    }) {
        this.key = params.key;
        this.regex = params.regex;
        this.fallback = params.fallback;
        this.timeout = params.timeout;
        this.value = undefined;
        this.type = params.type;
    }

    // Validate giá trị input theo regex nếu có
    validate(value: string): boolean {
        if (!this.regex) return true;
        return new RegExp(this.regex).test(value);
    }

    // Lưu giá trị nếu hợp lệ
    setValue(value: string): boolean {
        if (this.validate(value)) {
            this.value = value;
            return true;
        }
        return false;
    }
}
