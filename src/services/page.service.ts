import { prisma } from '~/config/prisma';

interface UpsertPageService {
    pageUid: string;
    pageAccessToken: string;
}
class PageService {
    async detail(flowId: string) {
        return prisma.page.findUnique({
            where: {
                flowId
            },
            select: {
                id: true,
                flowId: true,
                pageUid: true
            }
        });
    }

    async upsert(flowId: string, data: UpsertPageService) {
        const res = await prisma.page.upsert({
            where: {
                flowId
            },
            update: {
                pageAccessToken: data.pageAccessToken,
                pageUid: data.pageUid
            },
            create: {
                flowId,
                pageUid: data.pageUid,
                pageAccessToken: data.pageAccessToken
            }
        });

        return res;
    }

    async delete(flowId: string) {
        return prisma.page.delete({
            where: {
                flowId
            }
        });
    }
}

export default new PageService();
