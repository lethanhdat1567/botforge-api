export function getStaticUrl(path?: string | null) {
    if (!path) return null;

    // nếu đã là full url thì trả luôn
    if (/^https?:\/\//i.test(path)) return path;

    const baseUrl = (process.env.BASE_URL || '').replace(/\/+$/, '');
    const cleanPath = path.replace(/^\/+/, '');

    return `${baseUrl}/${cleanPath}`;
}

export function buildUploadPath(file: Express.Multer.File) {
    const basePath = '/uploads';
    const cleanName = file.filename.replace(/^\/+/, '');

    const type = file.mimetype.startsWith('audio/') ? 'audio' : 'images';

    return `${basePath}/${type}/${cleanName}`;
}
