export function resolveFallback(variable: any, fallbackData: any) {
    switch (variable.fallback.mode) {
        case 'custom':
            return variable.fallback.value;

        case 'default':
            return fallbackData?.fallbackMessage ?? null;

        default:
            throw new Error('Invalid fallback mode');
    }
}

export function resolveTimeout(variable: any, fallbackData: any) {
    if (variable.timeout.mode === 'custom') {
        return variable.timeout;
    }

    return {
        duration: fallbackData?.timeoutDuration ?? 5,
        unit: fallbackData?.timeoutUnit ?? 'second',
        mode: 'default'
    };
}
