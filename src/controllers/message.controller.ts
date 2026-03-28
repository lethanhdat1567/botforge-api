import { httpCode } from '~/constants/httpsCode';
import messageService from '~/services/message.service';

class MessageController {
    async getMessagesByConversation(req: any, res: any) {
        const participant = req.liveChatParticipant;
        if (!participant) {
            return res.error({ message: 'Thiếu ngữ cảnh live chat (middleware).' }, httpCode.clientError.badRequest);
        }

        const conversationId = req.query.conversationId;
        const [error, result] = await messageService.getMessagesByConversation(conversationId, req.query, participant);

        if (error) {
            const status =
                error === 'conversationId is required'
                    ? httpCode.clientError.badRequest
                    : httpCode.clientError.forbidden;
            return res.error(error, status);
        }

        return res.success(result);
    }
    async createMessage(req: any, res: any) {
        const participant = req.liveChatParticipant;
        if (!participant) {
            return res.error({ message: 'Thiếu ngữ cảnh live chat (middleware).' }, httpCode.clientError.badRequest);
        }

        const [error, result] = await messageService.createMessage(req.body, participant);

        if (error) {
            return res.error(error, httpCode.clientError.forbidden);
        }

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
        const participant = req.liveChatParticipant;
        if (!participant) {
            return res.error({ message: 'Thiếu ngữ cảnh live chat (middleware).' }, httpCode.clientError.badRequest);
        }

        const role = req.user?.role ?? 'user';
        const [error, result] = await messageService.markAsRead(req.params.conversationId, role, participant);

        if (error) {
            return res.error(error, httpCode.clientError.forbidden);
        }

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
