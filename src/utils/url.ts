export function getStaticUrl(path?: string | null) {
    if (!path) return null;

    // nếu đã là full url thì trả luôn
    if (/^https?:\/\//i.test(path)) return path;

    const baseUrl = (process.env.BASE_URL || '').replace(/\/+$/, '');
    const cleanPath = path.replace(/^\/+/, '');

    return `${baseUrl}/${cleanPath}`;
}

export function buildUploadPath(filename: string) {
    const basePath = '/uploads';

    const cleanBase = basePath.replace(/\/+$/, '');
    const cleanName = filename.replace(/^\/+/, '');

    return `${cleanBase}/${cleanName}`;
}
