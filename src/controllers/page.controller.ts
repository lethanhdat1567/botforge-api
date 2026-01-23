import PageModel from '~/models/page.model';

class PageController {
    // POST /pages
    async create(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const { platform, pageUid, name, avatar, accessToken } = req.body;

            if (!platform || !pageUid || !name || !accessToken) {
                return res.error({ message: 'Missing required fields' }, 400);
            }

            const page = await PageModel.create({
                userId,
                platform,
                pageUid,
                name,
                avatar,
                accessToken
            });

            return res.success(page, 201);
        } catch (error: any) {
            return res.error({ message: error.message }, 400);
        }
    }

    // GET /pages
    async list(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const pages = await PageModel.findByUser(userId);
            return res.success(pages, 200);
        } catch (error: any) {
            return res.error({ message: error.message }, 500);
        }
    }

    // GET /pages/:id
    async detail(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const { id } = req.params;

            const page = await PageModel.findById(id);
            if (!page) return res.error({ message: 'Page not found' }, 404);
            if (page.userId !== userId) return res.error({ message: 'Forbidden' }, 403);

            return res.success(page, 200);
        } catch (error: any) {
            return res.error({ message: error.message }, 500);
        }
    }

    // PATCH /pages/:id
    async update(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const { id } = req.params;

            const page = await PageModel.findById(id);
            if (!page) return res.error({ message: 'Page not found' }, 404);
            if (page.userId !== userId) return res.error({ message: 'Forbidden' }, 403);

            const allowedFields = ['name', 'avatar', 'accessToken', 'status'];
            const data: any = {};

            allowedFields.forEach((field) => {
                if (req.body[field] !== undefined) data[field] = req.body[field];
            });

            const updated = await PageModel.update(id, data);
            return res.success(updated, 200);
        } catch (error: any) {
            return res.error({ message: error.message }, 500);
        }
    }

    // DELETE /pages/:id
    async remove(req: any, res: any) {
        try {
            const userId = req.user.userId;
            const { id } = req.params;

            const page = await PageModel.findById(id);
            if (!page) return res.error({ message: 'Page not found' }, 404);
            if (page.userId !== userId) return res.error({ message: 'Forbidden' }, 403);

            await PageModel.delete(id);
            return res.success({ message: 'Page deleted' }, 200);
        } catch (error: any) {
            return res.error({ message: error.message }, 500);
        }
    }
}

export default new PageController();
