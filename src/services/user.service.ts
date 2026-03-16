import { prisma } from '~/config/prisma';
import { ListQuery } from '~/types/query.type';
import { getPaginationOptions } from '~/utils/pagination';
import bcrypt from 'bcrypt';

type CreateUser = {
    email: string;
    username: string;
    displayName: string;
    password: string;
};

const userSelect = {
    id: true,
    email: true,
    username: true,
    displayName: true,
    role: true,
    createdAt: true,
    updatedAt: true
};

class UserService {
    async list(filter?: ListQuery) {
        const [users, meta] = await prisma.user
            .paginate({
                where: {
                    OR: [
                        {
                            email: {
                                contains: filter?.q || ''
                            }
                        },
                        {
                            username: {
                                contains: filter?.q || ''
                            }
                        },
                        {
                            displayName: {
                                contains: filter?.q || ''
                            }
                        }
                    ]
                },
                select: userSelect
            })
            .withPages(getPaginationOptions(filter));

        return { users, meta };
    }

    async detail(id: string) {
        return prisma.user.findUnique({ where: { id }, select: userSelect });
    }

    async create(data: CreateUser) {
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        email: data.email
                    },
                    {
                        username: data.username
                    }
                ]
            }
        });

        if (existingUser) {
            return ['Email or username already exists', null];
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        await prisma.user.create({ data: { ...data, password: hashedPassword } });

        return [null, 'User created successfully'];
    }

    async update(id: string, data: Partial<CreateUser>) {
        if (data.password) {
            return ['Password cannot be updated through this endpoint', null];
        }

        const exitingUser = await prisma.user.findFirst({
            where: {
                NOT: { id },
                OR: [
                    {
                        email: data.email
                    },
                    {
                        username: data.username
                    }
                ]
            }
        });

        if (exitingUser) {
            return ['Email or username already exists', null];
        }

        await prisma.user.update({ where: { id }, data });

        return [null, 'User updated successfully'];
    }

    async updatePassword(id: string, data: { oldPassword: string; newPassword: string }) {
        const user = await prisma.user.findUnique({ where: { id } });

        if (!user) {
            return ['User not found', null];
        }

        const isMatch = await bcrypt.compare(data.oldPassword, user.password as string);

        if (!isMatch) {
            return ['Old password is incorrect', null];
        }

        const hashedPassword = await bcrypt.hash(data.newPassword, 10);

        await prisma.user.update({ where: { id }, data: { password: hashedPassword } });

        return [null, 'Password updated successfully'];
    }

    async delete(id: string) {
        return prisma.user.delete({ where: { id } });
    }

    async deleteBulk(ids: string[]) {
        return prisma.user.deleteMany({ where: { id: { in: ids } } });
    }
}

export default new UserService();
