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
