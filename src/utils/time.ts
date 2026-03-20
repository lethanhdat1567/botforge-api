export const sleep = (duration: number, unit: string): Promise<void> => {
    const unitMap: Record<string, number> = {
        s: 1000,
        m: 1000 * 60,
        h: 1000 * 60 * 60,
        d: 1000 * 60 * 60 * 24
    };

    const ms = duration * (unitMap[unit.toLowerCase()] || 1000);
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const convertToMs = (duration: number, unit: string): number => {
    const unitMap: Record<string, number> = {
        s: 1000,
        m: 60_000,
        h: 3_600_000,
        d: 86_400_000
    };

    const multiplier = unitMap[unit.toLowerCase()] ?? 1000;

    return duration * multiplier;
};

export const isFlowExpired = (expiresAt: string | Date | null | undefined) => {
    if (!expiresAt) return true;

    const expiryDate = expiresAt instanceof Date ? expiresAt : new Date(expiresAt);

    if (isNaN(expiryDate.getTime())) return true;

    return expiryDate.getTime() < Date.now();
};
