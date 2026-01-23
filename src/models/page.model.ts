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
        const existing = await prisma.page.findFirst({
            where: {
                platform: data.platform,
                pageUid: data.pageUid
            }
        });

        if (existing) {
            const error: any = new Error('Page already connected');
            error.code = 'EXIST';
            throw error;
        }

        return prisma.page.create({ data });
    }

    async findByUser(userId: string, platform?: Platform): Promise<IPage[]> {
        return prisma.page.findMany({
            where: {
                userId,
                ...(platform ? { platform } : {})
            },
            orderBy: { createdAt: 'desc' }
        });
    }

    async findById(id: string): Promise<IPage | null> {
        return prisma.page.findUnique({ where: { id } });
    }

    async update(id: string, data: Partial<IPage>): Promise<IPage> {
        // Nếu có update pageUid → check unique theo platform
        if (data.pageUid) {
            const current = await prisma.page.findUnique({
                where: { id }
            });

            if (!current) {
                throw new Error('Page not found');
            }

            const existing = await prisma.page.findFirst({
                where: {
                    platform: current.platform,
                    pageUid: data.pageUid,
                    NOT: { id }
                }
            });

            if (existing) {
                const error: any = new Error('Page UID already exists');
                error.code = 'EXIST';
                throw error;
            }
        }

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
