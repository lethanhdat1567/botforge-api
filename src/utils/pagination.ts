export const getPaginationOptions = (filter?: { page?: any; limit?: any }) => {
    return {
        page: Math.max(1, Number(filter?.page) || 1),
        limit: Math.max(1, Number(filter?.limit) || 10)
    };
};
