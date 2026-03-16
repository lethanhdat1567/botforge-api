import { httpCode } from '~/constants/httpsCode';
import flowShareCommentService from '~/services/flow-share-comment.service';

class FlowShareCommentController {
    async listByFlowShare(req: any, res: any) {
        const { flowShareId } = req.params;

        const result = await flowShareCommentService.listByFlowShare(flowShareId, req.query);

        return res.success(result);
    }

    async create(req: any, res: any) {
        const result = await flowShareCommentService.create({ ...req.body, userId: req.user.id });

        return res.success(result, httpCode.success.created);
    }

    async update(req: any, res: any) {
        const { id } = req.params;

        const result = await flowShareCommentService.update(id, { ...req.body, userId: req.user.id });

        return res.success(result);
    }

    async remove(req: any, res: any) {
        const { id } = req.params;

        await flowShareCommentService.remove(id, req.user.id);

        return res.success('Remove success');
    }
}

export default new FlowShareCommentController();
