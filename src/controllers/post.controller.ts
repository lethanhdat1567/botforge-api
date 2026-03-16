import { httpCode } from '~/constants/httpsCode';
import postService from '~/services/post.service';

class PostController {
    async listAdmin(req: any, res: any) {
        const result = await postService.list(req.query);

        return res.success(result);
    }

    async listPublic(req: any, res: any) {
        const result = await postService.list({ ...req.query, status: 'active' });

        return res.success(result);
    }

    async listByCategory(req: any, res: any) {
        const result = await postService.listByCategory(req.params.categorySlug, req.query);

        return res.success(result);
    }

    async detail(req: any, res: any) {
        const result = await postService.detail(req.params.id);

        return res.success(result);
    }

    async detailBySlug(req: any, res: any) {
        const result = await postService.detailBySlug(req.params.slug);

        return res.success(result);
    }

    async create(req: any, res: any) {
        const result = await postService.create({ ...req.body, authorId: req.user.id });

        return res.success(result, httpCode.success.created);
    }

    async update(req: any, res: any) {
        const result = await postService.update(req.params.id, { ...req.body, authorId: req.user.id });

        return res.success(result);
    }

    async delete(req: any, res: any) {
        const result = await postService.delete(req.params.id);

        return res.success(result);
    }

    async bulkDelete(req: any, res: any) {
        const result = await postService.bulkDelete(req.body.ids);

        return res.success(result);
    }
}

export default new PostController();
