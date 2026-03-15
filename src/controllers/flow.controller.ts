import { flowCode } from '~/constants/flow';
import { httpCode } from '~/constants/httpsCode';
import flowService from '~/services/flow.service';

class FlowController {
    async create(req: any, res: any) {
        const flow = await flowService.create({ ...req.body, userId: req.user.id });
        return res.success(flow, httpCode.success.created);
    }

    async list(req: any, res: any) {
        const result = await flowService.list(req.user.id, req.query);

        return res.success(result);
    }

    async detail(req: any, res: any) {
        const flow = await flowService.detail(req.params.id);

        return res.success(flow);
    }

    async update(req: any, res: any) {
        const flow = await flowService.update(req.params.id, req.user.id, req.body);
        return res.success(flow);
    }

    async remove(req: any, res: any) {
        const flow = await flowService.remove(req.params.id, req.user.id);
        return res.success(flow);
    }

    async removeMany(req: any, res: any) {
        const flow = await flowService.removeMany(req.body.ids, req.user.id);
        return res.success(flow);
    }

    async duplicate(req: any, res: any) {
        const [error, flow] = await flowService.duplicate(req.params.id, req.user.id);

        if (error) {
            return res.error(error, httpCode.clientError.notFound);
        }

        return res.success(flow, httpCode.success.created);
    }
}

export default new FlowController();
