import { CollectionVariableType } from '~/core/facebook/engine/types/collection';
const DEFAULT_PENDING_TIMEOUT = 5 * 1000;

export class PendingVariable {
    type: CollectionVariableType;
    key: string | null;
    regex?: string;
    fallback?: string;
    timeout?: number;
    value?: string;
    expiresAt?: number;

    constructor(params: {
        key: string | null;
        regex?: string;
        fallback?: string;
        timeout?: number;
        type: CollectionVariableType;
    }) {
        this.key = params.key;
        this.regex = params.regex;
        this.fallback = params.fallback;
        this.timeout = params.timeout ?? DEFAULT_PENDING_TIMEOUT;
        this.value = undefined;
        this.type = params.type;
        this.expiresAt = Date.now() + this.timeout;
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

    isExpired(): boolean {
        if (!this.expiresAt) return false;
        return Date.now() > this.expiresAt;
    }
}
