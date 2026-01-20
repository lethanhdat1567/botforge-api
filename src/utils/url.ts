export function getStaticUrl(path?: string | null) {
    if (!path) return null;

    // nếu đã là full url thì trả luôn
    if (/^https?:\/\//i.test(path)) return path;

    const baseUrl = (process.env.BASE_URL || '').replace(/\/+$/, '');
    const cleanPath = path.replace(/^\/+/, '');

    return `https://947106289777.ngrok-free.app/${cleanPath}`;
}

export function buildUploadPath(file: Express.Multer.File) {
    const basePath = '/uploads';
    const cleanName = file.filename.replace(/^\/+/, '');

    let type = 'images';

    if (file.mimetype.startsWith('image/')) {
        type = 'images';
    } else if (file.mimetype.startsWith('video/')) {
        type = 'videos';
    } else if (file.mimetype.startsWith('audio/')) {
        type = 'audio';
    }

    return `${basePath}/${type}/${cleanName}`;
}
