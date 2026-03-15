/* eslint-disable @typescript-eslint/no-unused-vars */
import { prisma } from '~/config/prisma';
import { PageStatus } from '~/generated/prisma';
import { getPaginationOptions } from '~/utils/pagination';

type CreatePage = {
    userId: string;
    name: string;
    pageUid: string;
    pageAccessToken: string;
    avatar?: string;
    status?: PageStatus;
};

type PageFilter = {
    status?: PageStatus;
    q?: string;
    page?: number;
    limit?: number;
};

class PageService {
    private excludeSensitive(page: any) {
        if (!page) return null;
        const { pageAccessToken, ...rest } = page;
        return rest;
    }

    async create(data: CreatePage) {
        const page = await prisma.page.create({
            data
        });

        return this.excludeSensitive(page);
    }

    async list(userId: string, filter?: PageFilter) {
        const [pages, meta] = await prisma.page
            .paginate({
                where: {
                    userId,
                    name: {
                        contains: filter?.q
                    },
                    status: filter?.status || undefined
                },
                orderBy: { createdAt: 'desc' }
            })
            .withPages(getPaginationOptions(filter));

        const pagesResult = pages.map((page) => {
            return this.excludeSensitive(page);
        });

        return {
            pages: pagesResult,
            meta
        };
    }

    async listForAdmin(filter?: PageFilter) {
        const [pages, meta] = await prisma.page
            .paginate({
                where: {
                    name: {
                        contains: filter?.q
                    },
                    status: filter?.status || undefined
                },
                orderBy: { createdAt: 'desc' }
            })
            .withPages(getPaginationOptions(filter));

        const pagesResult = pages.map((page) => {
            return this.excludeSensitive(page);
        });

        return {
            pages: pagesResult,
            meta
        };
    }

    async detail(id: string, userId: string) {
        const page = await prisma.page.findFirst({
            where: { id, userId }
        });

        if (!page) return null;

        return this.excludeSensitive(page);
    }

    async update(id: string, userId: string, data: Partial<CreatePage>) {
        const page = await prisma.page.update({
            where: { id, userId },
            data
        });

        return this.excludeSensitive(page);
    }

    async remove(id: string, userId: string) {
        return await prisma.page.delete({
            where: { id, userId }
        });
    }

    async removeMany(ids: string[], userId: string) {
        return await prisma.page.deleteMany({
            where: {
                id: { in: ids },
                userId
            }
        });
    }
}

export const pageService = new PageService();
