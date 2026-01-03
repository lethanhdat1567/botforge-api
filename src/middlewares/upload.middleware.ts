import multer from 'multer';
import path from 'path';
import fs from 'fs';

const UPLOAD_ROOT = path.join(process.cwd(), 'uploads');

const ensureDir = (dir: string) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

const getFolderByMime = (mimetype: string) => {
    if (mimetype.startsWith('image/')) return 'images';
    if (mimetype.startsWith('audio/')) return 'audio';
    return 'others';
};

const storage = multer.diskStorage({
    destination: (_, file, cb) => {
        const folder = getFolderByMime(file.mimetype);
        const uploadDir = path.join(UPLOAD_ROOT, folder);

        ensureDir(uploadDir);
        cb(null, uploadDir);
    },

    filename: (_, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext);
        cb(null, `${name}-${Date.now()}${ext}`);
    }
});

export const upload = multer({
    storage,
    limits: {
        fileSize: 50 * 1024 * 1024 // max chung, audio thường lớn hơn
    },
    fileFilter: (_, file, cb) => {
        if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('audio/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image & audio files are allowed'));
        }
    }
});
