import { prisma } from '~/config/prisma';
import { PageStatus, Platform } from '~/generated/prisma';

export interface IPage {
    id: string;
    userId: string;
    platform: Platform;
    pageUid: string;
    name: string;
    avatar?: string | null;
    accessToken: string;
    status: PageStatus;
    createdAt: Date;
    updatedAt: Date;
}

class PageModel {
    async create(data: {
        userId: string;
        platform: Platform;
        pageUid: string;
        name: string;
        avatar?: string;
        accessToken: string;
    }): Promise<IPage> {
        // unique theo platform + pageUid
        const existing = await prisma.page.findFirst({
            where: {
                platform: data.platform,
                pageUid: data.pageUid
            }
        });

        if (existing) {
            throw new Error('Page already connected');
        }

        return prisma.page.create({ data });
    }

    async findByUser(userId: string): Promise<IPage[]> {
        return prisma.page.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }

    async findById(id: string): Promise<IPage | null> {
        return prisma.page.findUnique({ where: { id } });
    }

    async update(id: string, data: Partial<IPage>): Promise<IPage> {
        return prisma.page.update({
            where: { id },
            data
        });
    }

    async delete(id: string): Promise<IPage> {
        return prisma.page.delete({ where: { id } });
    }
}

export default new PageModel();
