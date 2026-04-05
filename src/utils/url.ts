import { envConfig } from '~/config/envConfig';

export const formatMediaUrl = (url: string): string => {
    if (!url) return '';

    const isAbsolute = /^(https?:\/\/)/i.test(url);

    if (isAbsolute) {
        return url;
    }

    const baseUrl = envConfig.ngrokUrl || 'https://your-domain.com';

    const cleanBase = baseUrl.replace(/\/$/, '');
    const cleanPath = url.startsWith('/') ? url : `/${url}`;
    console.log(`${cleanBase}${cleanPath}`);
    return `${cleanBase}${cleanPath}`;
};

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
