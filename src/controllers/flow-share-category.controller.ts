import { Request, Response } from 'express';
import flowShareCategoryService from '~/services/flow-share-category.service';

class FlowShareCategoryController {
    async list(req: Request, res: any) {
        const data = await flowShareCategoryService.list();
        return res.success(data);
    }

    async detail(req: Request, res: any) {
        const data = await flowShareCategoryService.detail(req.params.slug);
        return res.success(data);
    }

    async create(req: Request, res: any) {
        const data = await flowShareCategoryService.create(req.body);
        return res.success(data, 201);
    }

    async update(req: Request, res: any) {
        const data = await flowShareCategoryService.update(req.params.id, req.body);
        return res.success(data);
    }

    async remove(req: Request, res: any) {
        await flowShareCategoryService.remove(req.params.id);
        return res.success(null);
    }

    async bulkDelete(req: Request, res: any) {
        const result = await flowShareCategoryService.bulkDelete(req.body.ids);
        return res.success(result);
    }

    async generate(req: Request, res: any) {
        return res.success(null);
    }
}

export default new FlowShareCategoryController();
