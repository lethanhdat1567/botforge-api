import fs from 'fs';
import path from 'path';

const UPLOAD_ROOT = path.join(process.cwd(), 'uploads');

export function deleteFile(filePath?: string) {
    if (!filePath) return;

    // chỉ cho phép path bắt đầu bằng /uploads/
    if (!filePath.startsWith('/uploads/')) {
        console.warn('Invalid upload path:', filePath);
        return;
    }

    // bỏ /uploads/ ở đầu
    const relativePath = filePath.replace(/^\/uploads\//, '');

    // resolve path tuyệt đối
    const fullPath = path.join(UPLOAD_ROOT, relativePath);

    // extra safety: ensure vẫn nằm trong uploads
    if (!fullPath.startsWith(UPLOAD_ROOT)) {
        console.warn('Path traversal detected:', fullPath);
        return;
    }

    fs.unlink(fullPath, (err) => {
        if (err) {
            if (err.code !== 'ENOENT') {
                console.error('Failed to delete file:', fullPath, err);
            }
        } else {
            console.log('Deleted file:', fullPath);
        }
    });
}

export type MediaType = 'image' | 'video' | 'audio';

export function filterMediaType(file: Express.Multer.File): MediaType {
    const mime = file.mimetype;

    if (mime.startsWith('image/')) return 'image';
    if (mime.startsWith('video/')) return 'video';
    if (mime.startsWith('audio/')) return 'audio';

    return 'image';
}
