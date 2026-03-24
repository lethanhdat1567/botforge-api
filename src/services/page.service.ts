import axios from 'axios';
import { prisma } from '~/config/prisma';

interface UpsertPageService {
    pageUid: string;
    pageAccessToken: string;
}
class PageService {
    private async subscribeWebhook(pageUid: string, pageAccessToken: string) {
        try {
            const url = `https://graph.facebook.com/v19.0/${pageUid}/subscribed_apps`;

            await axios.post(
                url,
                {
                    subscribed_fields: ['messages', 'messaging_postbacks', 'messaging_optins', 'message_reads']
                },
                {
                    params: { access_token: pageAccessToken }
                }
            );

            console.log(`✅ Đã đăng ký Webhook thành công cho Page: ${pageUid}`);
        } catch (error: any) {
            console.error('❌ Lỗi đăng ký Webhook Facebook:', error.response?.data || error.message);
            // Tùy bạn quyết định có throw error ở đây không.
            // Thường thì nên throw để User biết là kết nối chưa hoàn toàn thành công.
            throw new Error('Không thể đăng ký Webhook với Facebook. Vui lòng thử lại.');
        }
    }

    async detail(flowId: string) {
        return prisma.page.findUnique({
            where: {
                flowId
            },
            select: {
                id: true,
                flowId: true,
                pageUid: true
            }
        });
    }

    async upsert(flowId: string, data: UpsertPageService) {
        const res = await prisma.page.upsert({
            where: {
                flowId
            },
            update: {
                pageAccessToken: data.pageAccessToken,
                pageUid: data.pageUid
            },
            create: {
                flowId,
                pageUid: data.pageUid,
                pageAccessToken: data.pageAccessToken
            }
        });

        await this.subscribeWebhook(res.pageUid, res.pageAccessToken);

        return res;
    }

    async delete(flowId: string) {
        return prisma.page.delete({
            where: {
                flowId
            }
        });
    }
}

export default new PageService();
