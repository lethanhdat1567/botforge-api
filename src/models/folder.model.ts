import { prisma } from '~/config/prisma';
import FlowModel from './flow.model';

export interface IFolder {
    id: string;
    userId: string;
    name: string;
    platform: 'facebook' | 'instagram' | 'zalo';
    createdAt: Date;
    updatedAt: Date;
}

class FolderModel {
    // Tạo folder, kiểm tra trùng tên
    async create(userId: string, name: string, platform: 'facebook' | 'instagram' | 'zalo'): Promise<IFolder> {
        // Check duplicate
        const existing = await prisma.folder.findUnique({
            where: { userId_platform_name: { userId, platform, name } }
        });
        if (existing) throw new Error(`Folder name "${name}" already exists for this platform.`);

        return prisma.folder.create({ data: { userId, name, platform } });
    }

    // Update folder name, kiểm tra trùng
    async update(folderId: string, name?: string): Promise<IFolder> {
        const folder = await prisma.folder.findUnique({ where: { id: folderId } });
        if (!folder) throw new Error('Folder not found');

        if (name) {
            const existing = await prisma.folder.findFirst({
                where: { userId: folder.userId, platform: folder.platform, name, NOT: { id: folderId } }
            });
            if (existing) throw new Error(`Folder name "${name}" already exists for this platform.`);
        }

        return prisma.folder.update({ where: { id: folderId }, data: { name } });
    }

    async delete(folderId: string): Promise<void> {
        await prisma.folder.delete({ where: { id: folderId } }); // cascade delete flows
    }

    async findByUser(userId: string, q: string = ''): Promise<IFolder[]> {
        return prisma.folder.findMany({
            where: {
                userId,
                name: {
                    contains: q
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    }

    async findById(folderId: string): Promise<IFolder | null> {
        return prisma.folder.findUnique({ where: { id: folderId } });
    }

    // Duplicate folder + flows
    async duplicate(folderId: string, userId: string): Promise<IFolder> {
        const folder = await this.findById(folderId);
        if (!folder) throw new Error('Folder not found');

        // Tìm tên mới không trùng
        let newName = folder.name;
        let count = 1;
        while (
            await prisma.folder.findUnique({
                where: { userId_platform_name: { userId, platform: folder.platform, name: newName } }
            })
        ) {
            newName = `${folder.name} (${count})`;
            count++;
        }

        const newFolder = await prisma.folder.create({
            data: { userId, name: newName, platform: folder.platform }
        });

        // Duplicate flows
        const flows = await FlowModel.findByFolder(folderId);
        const duplicatedFlows = [];
        for (const flow of flows) {
            const newFlow = await FlowModel.duplicate(flow.id);
            duplicatedFlows.push(newFlow);
        }

        return newFolder;
    }
}

export default new FolderModel();
