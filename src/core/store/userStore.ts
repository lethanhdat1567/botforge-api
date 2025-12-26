import { UserItem } from '~/core/store/components/userItem';

class UserStore {
    private store: UserItem[] = [];

    add(pageId: string, psid: string): UserItem {
        let user = this.getUser(pageId, psid);
        if (!user) {
            user = new UserItem(pageId, psid);
            this.store.push(user);
        }
        return user;
    }

    updateFlow(pageId: string, psid: string, flowId: string) {
        const user = this.getUser(pageId, psid);
        if (user) {
            user.flowId = flowId;
        }
        return user;
    }

    remove(pageId: string, psid: string) {
        this.store = this.store.filter((u) => !(u.pageId === pageId && u.psid === psid));
    }

    getUser(pageId: string, psid: string): UserItem | undefined {
        return this.store.find((u) => u.pageId === pageId && u.psid === psid);
    }

    has(pageId: string, psid: string): boolean {
        return !!this.getUser(pageId, psid);
    }

    getAll(): UserItem[] {
        return [...this.store];
    }
}

export default new UserStore();
