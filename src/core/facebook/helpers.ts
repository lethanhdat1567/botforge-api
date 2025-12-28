import userStore from '~/core/facebook/store/userStore';

export function renderContent(content: string, pageId: string, senderId: string): string {
    if (typeof content !== 'string' || !content.includes('{{')) {
        return content;
    }

    const user = userStore.getUser(pageId, senderId);
    if (!user) return content;

    return content.replace(/\{\{\s*([a-zA-Z0-9_.-]+)\s*\}\}/g, (_, key) => {
        const value = user.getVariable(key);
        return value == null ? `{{ ${key} }}` : String(value);
    });
}
