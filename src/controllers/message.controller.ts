import { httpCode } from '~/constants/httpsCode';
import messageService from '~/services/message.service';

class MessageController {
    async getMessagesByConversation(req: any, res: any) {
        const conversationId = req.query.conversationId;
        const result = await messageService.getMessagesByConversation(conversationId, req.query);

        return res.success(result);
    }
    async createMessage(req: any, res: any) {
        const result = await messageService.createMessage(req.body, req?.user);

        return res.success(result, httpCode.success.created);
    }
    async revokeMessage(req: any, res: any) {
        const [error, result] = await messageService.revokeMessage(req.params.id);

        if (error) {
            return res.error(error, httpCode.clientError.notFound);
        }

        return res.success(result);
    }
    async markAsRead(req: any, res: any) {
        const result = await messageService.markAsRead(req.params.conversationId, req.user?.role || 'user');

        return res.success(result);
    }
    async deleteMessage(req: any, res: any) {
        const [error, result] = await messageService.deleteMessage(req.params.id);

        if (error) {
            return res.error(error, httpCode.clientError.notFound);
        }

        return res.success(result);
    }
}

export default new MessageController();
