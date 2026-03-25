export const getOrderBy = (sortBy?: string, sortOrder: string = 'desc', customMapping: Record<string, any> = {}) => {
    const mapping: Record<string, any> = {
        createdAt: { createdAt: sortOrder },
        updatedAt: { updatedAt: sortOrder },
        name: { name: sortOrder },
        ...customMapping
    };

    const field = sortBy && mapping[sortBy] ? sortBy : 'createdAt';

    return mapping[field];
};
