import fs from 'fs';
import path from 'path';

export function deleteFile(filePath: string) {
    if (!filePath) return;

    // filePath: /uploads/1-xxxx.jpg
    // join với root project
    const fullPath = path.join(process.cwd(), filePath.replace(/^\//, ''));

    fs.unlink(fullPath, (err) => {
        if (err) console.error('Failed to delete file:', fullPath, err);
        else console.log('Deleted file:', fullPath);
    });
}
