import flowShareSaveService from '~/services/flow-share-save.service';

class FlowShareSaveController {
    async toggle(req: any, res: any) {
        const { flowShareId } = req.params;

        const status = await flowShareSaveService.toggle(flowShareId, req.user.id);

        return res.success({
            message: 'Flow share save status changed',
            status
        });
    }

    async checkStatus(req: any, res: any) {
        const { flowShareId } = req.params;
        const status = await flowShareSaveService.checkStatus(flowShareId, req.user.id);

        return res.success({
            isSaved: status
        });
    }

    async listMySaved(req: any, res: any) {
        const flowShareSaves = await flowShareSaveService.listMySaved(req.user.id, req.query);

        return res.success(flowShareSaves);
    }
}

export default new FlowShareSaveController();
