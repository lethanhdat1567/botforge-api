type ListQuery<T = string> = {
    status?: T;
    q?: string;
    limit?: string;
    page?: string;
};

export type { ListQuery };
