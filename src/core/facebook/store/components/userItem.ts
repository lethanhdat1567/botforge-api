import { PendingVariable } from '~/core/facebook/store/components/pendingVariables';

export class UserItem {
    pageId: string;
    psid: string;
    flowId?: string;
    flowStatus: 'pending' | 'pending_processing' | 'running';
    variables: Record<string, string>;
    pendingVariables: PendingVariable | null;

    constructor(pageId: string, psid: string) {
        this.pageId = pageId;
        this.psid = psid;
        this.variables = {};
        this.pendingVariables = null;
        this.flowStatus = 'running';
    }

    // Thêm pending variable (start collection)
    addPendingVariables(pending: PendingVariable, flowId: string) {
        this.flowId = flowId;
        this.pendingVariables = pending;
        this.flowStatus = 'pending';
    }

    // Set giá trị cho pending variable, merge vào variables
    setVariableValue(key: string, value: string): boolean {
        if (!this.pendingVariables) return false;
        if (this.pendingVariables.key !== key) return false;

        if (!this.pendingVariables.setValue(value)) return false;

        // Merge vào variables hợp lệ
        this.variables[key] = value;

        // Xóa pending variable sau khi set xong
        this.pendingVariables = null;
        this.flowStatus = 'running';

        return true;
    }

    // Lấy pending variable hiện tại (nếu có)
    getPendingVariable(): PendingVariable | null {
        return this.pendingVariables;
    }

    getVariable(key: string): string | undefined {
        return this.variables[key];
    }

    updateFlowStatus(status: 'pending' | 'pending_processing' | 'running'): boolean {
        this.flowStatus = status;
        return true;
    }
}
