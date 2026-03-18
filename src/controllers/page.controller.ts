import { httpCode } from '~/constants/httpsCode';
import { pageService } from '~/services/page.service';

class PageController {
    async list(req: any, res: any) {
        const pages = await pageService.list(req.user.id, req.query);

        return res.success(pages);
    }

    async listForAdmin(req: any, res: any) {
        const pages = await pageService.listForAdmin(req.query);
        return res.success(pages);
    }

    async detail(req: any, res: any) {
        const { id } = req.params;
        const page = await pageService.detail(id, req.user.id);

        if (!page) return res.error('Page không tồn tại hoặc bạn không có quyền truy cập', 404);

        return res.success(page);
    }

    async create(req: any, res: any) {
        const { name, pageUid, pageAccessToken } = req.body;
        const userId = req.user.id;

        if (!pageUid || !pageAccessToken) {
            return res.error('Thiếu thông tin Facebook Page', httpCode.clientError.notFound);
        }

        const page = await pageService.create({
            name,
            pageUid,
            pageAccessToken,
            userId
        });

        return res.success(page);
    }

    async update(req: any, res: any) {
        const { id } = req.params;

        const page = await pageService.update(id, req.user.id, req.body);
        return res.success(page);
    }

    async remove(req: any, res: any) {
        const { id } = req.params;
        await pageService.remove(id, req.user.id);
        return res.success('Remove page success');
    }

    async removeMany(req: any, res: any) {
        const { ids } = req.body;
        if (!Array.isArray(ids)) return res.error('Ids must be an array', httpCode.clientError.badRequest);

        await pageService.removeMany(ids, req.user.id);

        return res.success('Remove pages success');
    }
}

export default new PageController();
