export const isRegexMatch = (text: string, pattern: string): boolean => {
    if (!pattern || !text) return false;

    try {
        const regex = new RegExp(pattern);
        return regex.test(text);
    } catch (error: any) {
        console.error(`[RegexHelper] Invalid regex pattern: "${pattern}"`, error.message);
        return false;
    }
};
