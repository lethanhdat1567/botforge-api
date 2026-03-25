type ListQuery<T = string> = {
    status?: T;
    q?: string;
    sortBy?: string;
    sortOrder?: string;
    limit?: string;
    page?: string;
};

export type { ListQuery };
