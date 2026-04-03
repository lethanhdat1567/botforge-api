import axios from 'axios';
import { envConfig } from '~/config/envConfig';
import { prisma } from '~/config/prisma';

class FacebookAuthService {
    private async getLongLivedToken(shortLivedToken: string) {
        try {
            const exchangeRes = await axios.get('https://graph.facebook.com/v21.0/oauth/access_token', {
                params: {
                    grant_type: 'fb_exchange_token',
                    client_id: envConfig.facebook.appId,
                    client_secret: envConfig.facebook.appSecret,
                    fb_exchange_token: shortLivedToken
                }
            });

            const longLivedToken = exchangeRes.data.access_token;

            return {
                accessToken: longLivedToken
            };
        } catch (error: any) {
            console.error('Facebook Auth Error:', error.response?.data || error.message);
            throw new Error('Lỗi xử lý Token với Facebook');
        }
    }

    async isFacebookConnected(userId: string) {
        const fbAcc = await prisma.facebookAuth.findUnique({ where: { userId } });

        return fbAcc ? true : false;
    }

    async create(userId: string, shortLivedToken: string, facebookProviderId: string) {
        const { accessToken } = await this.getLongLivedToken(shortLivedToken);

        return await prisma.facebookAuth.upsert({
            where: { userId },
            update: {
                fbAccessToken: accessToken,
                facebookProviderId: facebookProviderId
            },
            create: {
                userId,
                fbAccessToken: accessToken,
                facebookProviderId: facebookProviderId
            }
        });
    }

    async getPages(userId: string) {
        const FBAuth = await prisma.facebookAuth.findUnique({ where: { userId } });

        if (!FBAuth) return null;

        const accessToken = FBAuth.fbAccessToken;

        try {
            const result = await axios.get('https://graph.facebook.com/v19.0/me/accounts', {
                params: {
                    access_token: accessToken
                }
            });

            const responsePages = result.data.data.map((page: any) => ({
                id: page.id,
                name: page.name,
                accessToken: page.access_token
            }));

            return responsePages;
        } catch (error: any) {
            console.error('FB API Error:', error.response?.data || error.message);
            throw error;
        }
    }

    async logout(userId: string) {
        return await prisma.facebookAuth.delete({ where: { userId } });
    }
}

export default new FacebookAuthService();
