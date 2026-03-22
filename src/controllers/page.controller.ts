import pageService from '~/services/page.service';

class PageController {
    // Get Page detail
    async detail(req: any, res: any) {
        const result = await pageService.detail(req.params.flowId);

        return res.success(result);
    }
    // Create or update Page
    async connect(req: any, res: any) {
        const result = await pageService.upsert(req.params.flowId, req.body);

        return res.success(result);
    }
    // Delete Page
    async remove(req: any, res: any) {
        const result = await pageService.delete(req.params.flowId);

        return res.success(result);
    }
}

export default new PageController();
