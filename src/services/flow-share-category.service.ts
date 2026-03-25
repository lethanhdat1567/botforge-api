import slugify from 'slugify';
import { prisma } from '~/config/prisma';

class FlowShareCategoryService {
    async list() {
        return await prisma.flowShareCategory.findMany({
            orderBy: { name: 'asc' },
            include: { _count: { select: { flowShares: true } } }
        });
    }

    async detail(slug: string) {
        const category = await prisma.flowShareCategory.findUnique({
            where: { slug },
            include: { flowShares: true }
        });
        if (!category) throw new Error('Không tìm thấy danh mục này');
        return category;
    }

    async create(data: { name: string; slug?: string; description?: string }) {
        const finalSlug = data.slug || slugify(data.name, { lower: true, strict: true });

        const existing = await prisma.flowShareCategory.findFirst({
            where: { OR: [{ name: data.name }, { slug: finalSlug }] }
        });
        if (existing) throw new Error('Tên hoặc Slug danh mục đã tồn tại');

        return await prisma.flowShareCategory.create({
            data: { ...data, slug: finalSlug }
        });
    }

    async update(id: string, data: any) {
        if (data.name && !data.slug) {
            data.slug = slugify(data.name, { lower: true, strict: true });
        }
        return await prisma.flowShareCategory.update({
            where: { id },
            data
        });
    }

    async remove(id: string) {
        const count = await prisma.flowShare.count({
            where: { flowShareCategory: { some: { id } } }
        });

        if (count > 0) throw new Error(`Không thể xóa! Đang có ${count} flows thuộc danh mục này.`);

        return await prisma.flowShareCategory.delete({ where: { id } });
    }

    async bulkDelete(ids: string[]) {
        // Xóa hàng loạt những cái không có ràng buộc
        return await prisma.flowShareCategory.deleteMany({
            where: {
                id: { in: ids },
                flowShares: { none: {} }
            }
        });
    }
}

export default new FlowShareCategoryService();
