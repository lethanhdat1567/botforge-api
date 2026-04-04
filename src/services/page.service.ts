import axios from 'axios';
import { envConfig } from '~/config/envConfig';
import { prisma } from '~/config/prisma';

const FB_GRAPH_VERSION = 'v21.0';

/** Comma-separated list; Graph API expects query/form style, not JSON body, for subscribed_apps. */
const MESSENGER_SUBSCRIBED_FIELDS = 'messages,messaging_postbacks,messaging_optins,message_reads,message_deliveries';

interface UpsertPageService {
    pageUid: string;
    pageAccessToken: string;
}

/**
 * Meta (manual): Messenger product Webhooks — Page object: callback URL + verify token;
 * tick subscription fields (messages, messaging_postbacks, …). FE Facebook Login appId must
 * match FACEBOOK_APP_ID. Non-test users need Live app + Advanced Access for pages_messaging.
 */
class PageService {
    private graphUrl(path: string) {
        return `https://graph.facebook.com/${FB_GRAPH_VERSION}${path}`;
    }

    /** Confirms which fields the app is subscribed to for this Page (use after POST subscribed_apps). */
    private async fetchSubscribedApps(pageUid: string, pageAccessToken: string) {
        const { data } = await axios.get(this.graphUrl(`/${pageUid}/subscribed_apps`), {
            params: { access_token: pageAccessToken }
        });
        return data;
    }

    /** Logs Page token scopes when app id/secret are configured (troubleshoot missing messaging). */
    private async logPageAccessTokenDebug(pageAccessToken: string) {
        const { appId, appSecret } = envConfig.facebook;
        if (!appId || !appSecret) return;

        try {
            const { data } = await axios.get(this.graphUrl('/debug_token'), {
                params: {
                    input_token: pageAccessToken,
                    access_token: `${appId}|${appSecret}`
                }
            });
            const info = data?.data;
            if (info) {
                console.log('[Facebook] debug_token (page access token):', {
                    is_valid: info.is_valid,
                    scopes: info.scopes,
                    granular_scopes: info.granular_scopes
                });
            }
        } catch (e: any) {
            console.warn('[Facebook] debug_token failed:', e.response?.data || e.message);
        }
    }

    private async subscribeWebhook(pageUid: string, pageAccessToken: string) {
        const url = this.graphUrl(`/${pageUid}/subscribed_apps`);

        try {
            const { data: postData } = await axios.post(url, null, {
                params: {
                    access_token: pageAccessToken,
                    subscribed_fields: MESSENGER_SUBSCRIBED_FIELDS
                }
            });

            console.log('[Facebook] subscribed_apps POST success:', { pageUid, response: postData });

            const subscribed = await this.fetchSubscribedApps(pageUid, pageAccessToken);
            console.log('[Facebook] subscribed_apps GET (verify):', JSON.stringify(subscribed));

            await this.logPageAccessTokenDebug(pageAccessToken);
        } catch (error: any) {
            const errBody = error.response?.data;
            console.error('[Facebook] subscribed_apps POST error:', {
                pageUid,
                message: error.message,
                response: errBody ?? null
            });
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
