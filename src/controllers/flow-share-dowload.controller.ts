import { httpCode } from '~/constants/httpsCode';
import flowShareDowloadService from '~/services/flow-share-dowload.service';

class FlowShareDowloadController {
    async listMyDowload(req: any, res: any) {
        const dowloads = await flowShareDowloadService.listMyDowload(req.user.id, req.query);
        return res.success(dowloads);
    }

    async checkStatus(req: any, res: any) {
        const { flowShareId } = req.params;
        const status = await flowShareDowloadService.checkStatus(flowShareId, req.user.id);

        return res.success({
            isDownloaded: status
        });
    }

    async create(req: any, res: any) {
        const dowload = await flowShareDowloadService.create(req.body, req.user.id);

        return res.success(dowload);
    }

    async listForAdmin(req: any, res: any) {
        const dowloads = await flowShareDowloadService.listForAdmin(req.query);

        return res.success(dowloads);
    }

    async remove(req: any, res: any) {
        const { id } = req.params;

        await flowShareDowloadService.remove(id, req.user.id);

        return res.success('Remove success');
    }

    async removeMany(req: any, res: any) {
        const { ids } = req.body;
        if (!Array.isArray(ids)) return res.error('Ids must be an array', httpCode.clientError.badRequest);

        await flowShareDowloadService.removeMany(ids, req.user.id);

        return res.success('Remove success');
    }
}

export default new FlowShareDowloadController();
