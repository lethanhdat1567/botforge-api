import axios from 'axios';
import { prisma } from '~/config/prisma';

class FacebookSenderService {
    private GRAPH_API_URL = `https://graph.facebook.com/v19.0/me/messages`;

    async sendTextMessage(pageId: string, senderId: string, text: string) {
        const page = await prisma.page.findFirst({
            where: {
                id: pageId
            }
        });

        if (!page) return;

        const response = await axios.post(
            this.GRAPH_API_URL,
            {
                recipient: { id: senderId },
                message: { text: text }
            },
            {
                params: { access_token: page.pageAccessToken }
            }
        );

        return response.data;
    }
}

export default new FacebookSenderService();
