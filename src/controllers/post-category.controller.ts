import { httpCode } from '~/constants/httpsCode';
import postCategoryService from '~/services/post-category.service';

class PostCategoryController {
    async list(req: any, res: any) {
        const result = await postCategoryService.list(req.query);

        return res.success(result);
    }

    async detail(req: any, res: any) {
        const result = await postCategoryService.detail(req.params.id);

        return res.success(result);
    }

    async create(req: any, res: any) {
        const result = await postCategoryService.create(req.body);

        return res.success(result, httpCode.success.created);
    }

    async update(req: any, res: any) {
        const result = await postCategoryService.update(req.params.id, req.body);

        return res.success(result);
    }

    async delete(req: any, res: any) {
        const result = await postCategoryService.delete(req.params.id);

        return res.success(result);
    }

    async bulkDelete(req: any, res: any) {
        const result = await postCategoryService.bulkDelete(req.body.ids);

        return res.success(result);
    }
}

export default new PostCategoryController();
