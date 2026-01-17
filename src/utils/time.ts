/**
 * Chuyển duration dạng '15m', '1h', '7d' thành milliseconds
 */
export const parseDuration = (duration: string): number => {
    const match = duration.match(/^(\d+)([smhd])$/);
    if (!match) throw new Error(`Invalid duration format: ${duration}`);
    const value = parseInt(match[1], 10);
    const unit = match[2];

    switch (unit) {
        case 's':
            return value * 1000;
        case 'm':
            return value * 60 * 1000;
        case 'h':
            return value * 60 * 60 * 1000;
        case 'd':
            return value * 24 * 60 * 60 * 1000;
        default:
            throw new Error(`Unknown duration unit: ${unit}`);
    }
};

/**
 * Trả về Date object expiresAt từ duration
 */
export const getExpiresAt = (duration: string): Date => {
    return new Date(Date.now() + parseDuration(duration));
};

export const durationWithUnitToMs = (duration: number, unit: 'second' | 'minute' | 'hour'): number => {
    if (duration < 0) {
        throw new Error('Duration must be >= 0');
    }

    switch (unit) {
        case 'second':
            return duration * 1000;
        case 'minute':
            return duration * 60 * 1000;
        case 'hour':
            return duration * 60 * 60 * 1000;
        default:
            throw new Error(`Unknown duration unit: ${unit}`);
    }
};
