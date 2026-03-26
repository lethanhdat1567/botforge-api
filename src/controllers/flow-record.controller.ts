import flowRecordService from '~/services/flow-record.service';

class FlowRecordController {
    async list(req: any, res: any) {
        const result = await flowRecordService.listByUser(req.user.id, req.query);

        return res.success(result);
    }

    async delete(req: any, res: any) {
        const result = await flowRecordService.delete(req.params.id);

        return res.success({
            message: 'Delete successfully'
        });
    }

    async bulkDelete(req: any, res: any) {
        const result = await flowRecordService.bulkDelete(req.body.ids);

        return res.success({
            message: 'Delete successfully'
        });
    }
}

export default new FlowRecordController();
