import { httpCode } from '~/constants/httpsCode';
import { flowShareService } from '~/services/flow-share.service';

class FlowShareController {
    async list(req: any, res: any) {
        const result = await flowShareService.list(req.user.id, req.query);

        return res.success(result);
    }

    async listForAdmin(req: any, res: any) {
        const result = await flowShareService.listForAdmin(req.query);

        return res.success(result);
    }

    async detail(req: any, res: any) {
        const flowShare = await flowShareService.detail(req.params.id);

        return res.success(flowShare);
    }

    async create(req: any, res: any) {
        const flowShare = await flowShareService.create(req.body, req.user.id);

        return res.success(flowShare, httpCode.success.created);
    }

    async update(req: any, res: any) {
        const flowShare = await flowShareService.update(req.params.id, req.user.id, req.body);

        return res.success(flowShare);
    }

    async remove(req: any, res: any) {
        const flowShare = await flowShareService.remove(req.params.id, req.user.id);

        return res.success(flowShare);
    }

    async removeMany(req: any, res: any) {
        const flowShare = await flowShareService.removeMany(req.body.ids, req.user.id);

        return res.success(flowShare);
    }

    async public(req: any, res: any) {
        const flowShare = await flowShareService.public(req.query);

        return res.success(flowShare);
    }

    async related(req: any, res: any) {
        const flowShare = await flowShareService.related(req.params.id, 6);

        return res.success(flowShare);
    }
}

export default new FlowShareController();
