import { prisma } from '~/config/prisma';
import { PostsStatus } from '@prisma/client';
import { ListQuery } from '~/types/query.type';
import { getPaginationOptions } from '~/utils/pagination';

type CreatePost = {
    authorId: string;
    categoryId: string;
    title: string;
    description: string;
    thumbnail: string;
    slug: string;
    content: string;
    status: PostsStatus;
};

const postSelect = {
    id: true,
    title: true,
    description: true,
    status: true,
    thumbnail: true,
    slug: true,
    createdAt: true,
    updatedAt: true,
    author: {
        select: {
            id: true,
            displayName: true,
            username: true,
            avatar: true
        }
    },
    category: {
        select: {
            id: true,
            name: true,
            slug: true
        }
    }
};

const postDetailSelect = {
    id: true,
    title: true,
    description: true,
    content: true,
    status: true,
    slug: true,
    thumbnail: true,
    createdAt: true,
    updatedAt: true,
    author: {
        select: {
            id: true,
            displayName: true,
            username: true,
            avatar: true
        }
    },
    category: {
        select: {
            id: true,
            name: true,
            slug: true
        }
    }
};

class PostService {
    async list(query: ListQuery<PostsStatus>) {
        const [posts, meta] = await prisma.posts
            .paginate({
                where: {
                    title: {
                        contains: query.q
                    },
                    status: query.status
                },
                select: postSelect,
                orderBy: {
                    createdAt: 'desc'
                }
            })
            .withPages(getPaginationOptions(query));

        return { posts, meta };
    }

    async listByCategory(categorySlug: string, query: ListQuery<PostsStatus>) {
        const [posts, meta] = await prisma.posts
            .paginate({
                where: {
                    category: {
                        slug: categorySlug
                    },
                    title: {
                        contains: query.q
                    },
                    status: query.status
                },
                select: postSelect,
                orderBy: {
                    createdAt: 'desc'
                }
            })
            .withPages(getPaginationOptions(query));

        return { posts, meta };
    }

    async detail(id: string) {
        return prisma.posts.findUnique({
            where: { id },
            select: postDetailSelect
        });
    }

    async detailBySlug(slug: string) {
        return prisma.posts.findUnique({
            where: { slug },
            select: postDetailSelect
        });
    }

    async create(data: CreatePost) {
        return prisma.posts.create({ data });
    }

    async update(id: string, data: Partial<CreatePost>) {
        return prisma.posts.update({ where: { id }, data });
    }

    async delete(id: string) {
        return prisma.posts.delete({ where: { id } });
    }

    async bulkDelete(ids: string[]) {
        return prisma.posts.deleteMany({ where: { id: { in: ids } } });
    }
}

export default new PostService();
