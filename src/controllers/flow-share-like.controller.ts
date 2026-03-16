import flowShareLikeService from '~/services/flow-share-like.service';

class FlowShareLikeController {
    async listUsersByFlowShare(req: any, res: any) {
        const { flowShareId } = req.params;

        const users = await flowShareLikeService.listUsersByFlowShare(flowShareId);

        return res.success({ users });
    }

    async toggle(req: any, res: any) {
        const { flowShareId } = req.params;

        const status = await flowShareLikeService.toggle(flowShareId, req.user.id);

        return res.success({
            message: 'Flow share like status changed',
            status
        });
    }

    async checkStatus(req: any, res: any) {
        const { flowShareId } = req.params;
        const status = await flowShareLikeService.checkStatus(flowShareId, req.user.id);

        return res.success({
            isLiked: status
        });
    }
}

export default new FlowShareLikeController();
