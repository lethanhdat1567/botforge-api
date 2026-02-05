import { prisma } from '~/config/prisma';

class GuideModel {
    list(params: any) {
        const page = Math.max(Number(params.page) || 1, 1);
        const limit = Math.min(Number(params.limit) || 20, 100);
        const skip = (page - 1) * limit;

        const where: any = {};

        if (params.q) {
            where.title = { contains: params.q };
        }

        if (params.status) {
            where.status = params.status;
        }

        return Promise.all([
            prisma.guide.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit
            }),
            prisma.guide.count({ where })
        ]).then(([items, total]) => ({
            items,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        }));
    }

    findById(id: string) {
        return prisma.guide.findUnique({ where: { id } });
    }

    findBySlug(slug: string) {
        return prisma.guide.findFirst({
            where: { slug, status: 'published' }
        });
    }

    create(data: any) {
        return prisma.guide.create({ data });
    }

    update(id: string, data: any) {
        return prisma.guide.update({ where: { id }, data });
    }

    delete(id: string) {
        return prisma.guide.delete({ where: { id } });
    }
}

export default new GuideModel();
