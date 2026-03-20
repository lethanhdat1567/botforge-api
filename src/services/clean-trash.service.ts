import fs from 'fs';
import path from 'path';
import { prisma } from '~/config/prisma';

class CleanTrashService {
    async getUsedFiles(): Promise<Set<string>> {
        const usedFiles = new Set<string>();

        const [users, shares, posts, messages, flowShares, pages, notifications] = await Promise.all([
            prisma.user.findMany({ select: { avatar: true } }),
            prisma.flowShare.findMany({ select: { thumbnail: true } }),
            prisma.posts.findMany({ select: { thumbnail: true } }),
            prisma.message.findMany({ select: { fileUrl: true } }),
            prisma.flowShare.findMany({ select: { content: true } }),
            prisma.page.findMany({ select: { avatar: true } }),
            prisma.notification.findMany({ select: { thumbnail: true } })
        ]);

        const allUrls = [
            ...users.map((u) => u.avatar),
            ...shares.map((s) => s.thumbnail),
            ...posts.map((p) => p.thumbnail),
            ...messages.map((m) => m.fileUrl),
            ...flowShares.map((fs) => fs.content),
            ...pages.map((p) => p.avatar),
            ...notifications.map((n) => n.thumbnail)
        ];

        allUrls.forEach((url) => {
            if (url) usedFiles.add(path.basename(url));
        });

        const flows = await prisma.flow.findMany({
            select: { logicJson: true, layoutJson: true }
        });

        flows.forEach((flow) => {
            const jsonStr = JSON.stringify([flow.logicJson, flow.layoutJson]);

            const fileRegex = /\/uploads\/(images|videos|audio|others)\/([\w-]+\.(jpg|jpeg|png|gif|mp4|mp3|wav|ogg))/gi;

            let match;
            while ((match = fileRegex.exec(jsonStr)) !== null) {
                usedFiles.add(match[2]);
            }
        });

        return usedFiles;
    }

    public async handleClean() {
        console.log('[CleanTrash] Starting...');
        const UPLOAD_ROOT = path.join(process.cwd(), 'uploads');
        const SUB_FOLDERS = ['images', 'videos', 'audios'];

        try {
            const usedFiles = await this.getUsedFiles();

            let count = 0;
            const ONE_DAY = 0;

            SUB_FOLDERS.forEach((folder) => {
                const folderPath = path.join(UPLOAD_ROOT, folder);
                if (!fs.existsSync(folderPath)) return;

                const files = fs.readdirSync(folderPath);
                files.forEach((file) => {
                    const filePath = path.join(folderPath, file);
                    const stats = fs.statSync(filePath);

                    if (!usedFiles.has(file) && Date.now() - stats.mtimeMs > ONE_DAY) {
                        // Log tên file kèm thư mục trước khi xóa
                        console.log(`Deleted: ${folder}/${file}`);

                        fs.unlinkSync(filePath);
                        count++;
                    }
                });
            });

            console.log(`[CleanTrash] Finished. Removed ${count} files.`);
        } catch (err) {
            console.error('[CleanTrash] Error:', err);
        }
    }
}

export default new CleanTrashService();
