import { httpCode } from '~/constants/httpsCode';
import conversationService from '~/services/conversation.service';

class ConversationController {
    async list(req: any, res: any) {
        const result = await conversationService.list(req.query.status);

        return res.success(result);
    }

    async detail(req: any, res: any) {
        const result = await conversationService.detail(req.params.id);

        return res.success(result);
    }

    async create(req: any, res: any) {
        const result = await conversationService.create(req?.user?.id);

        return res.success(result, httpCode.success.created);
    }

    async update(req: any, res: any) {
        const result = await conversationService.update(req.params.id, req.body.status);

        return res.success(result);
    }

    async delete(req: any, res: any) {
        await conversationService.delete(req.params.id);

        return res.success({ message: 'Conversation deleted' });
    }

    async getCurrent(req: any, res: any) {
        const { guestName } = req.query;

        const [error, result] = await conversationService.getCurrent(guestName, req?.user?.id);

        if (error) {
            return res.error(error, httpCode.clientError.notFound);
        }

        return res.success(result);
    }
}

export default new ConversationController();
