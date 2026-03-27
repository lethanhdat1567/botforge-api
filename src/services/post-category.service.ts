import { prisma } from '~/config/prisma';
import { ListQuery } from '~/types/query.type';
import { getPaginationOptions } from '~/utils/pagination';

type CreateCategory = {
    name: string;
    slug: string;
};

class PostCategoryService {
    async list(query: ListQuery) {
        const postCategories = await prisma.postCategories.findMany({
            where: {
                name: {
                    contains: query.q
                }
            }
        });

        return { postCategories };
    }

    async detail(id: string) {
        return prisma.postCategories.findUnique({ where: { id } });
    }

    async create(data: CreateCategory) {
        return prisma.postCategories.create({ data });
    }

    async update(id: string, data: Partial<CreateCategory>) {
        return prisma.postCategories.update({ where: { id }, data });
    }

    async delete(id: string) {
        return prisma.postCategories.delete({ where: { id } });
    }

    async bulkDelete(ids: string[]) {
        return prisma.postCategories.deleteMany({ where: { id: { in: ids } } });
    }
}

export default new PostCategoryService();
