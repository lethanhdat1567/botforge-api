import { deleteFile } from '~/utils/file';
import { buildUploadPath } from '~/utils/url';

class UploadController {
    async uploadImage(req: any, res: any) {
        if (!req.file) {
            return res.error('File is required', 400);
        }

        const filePath = buildUploadPath(req.file.filename);

        return res.success({
            filename: req.file.filename,
            path: filePath
        });
    }

    async uploadImages(req: any, res: any) {
        if (!req.files || req.files.length === 0) {
            return res.error('Files are required', 400);
        }

        const files = req.files.map((file: any) => ({
            filename: file.filename,
            path: buildUploadPath(file.filename)
        }));

        return res.success(files);
    }

    async deleteFile(req: any, res: any) {
        const { path } = req.query;

        if (!path) {
            return res.error('File path is required', 400);
        }

        deleteFile(path);

        return res.success({ message: 'File deleted' });
    }
}

export default new UploadController();
