import axios from 'axios';
import { envConfig } from '~/config/envConfig';
import { prisma } from '~/config/prisma';
import { httpCode } from '~/constants/httpsCode';

const FB_GRAPH_VERSION = 'v21.0';

/** Comma-separated list; Graph API expects query/form style, not JSON body, for subscribed_apps. */
const MESSENGER_SUBSCRIBED_FIELDS = 'messages,messaging_postbacks,messaging_optins,message_reads,message_deliveries';

interface UpsertPageService {
    pageUid: string;
    pageAccessToken: string;
}

export type MessengerSubscribeResult = {
    subscribedFields: string;
    postResponse: unknown;
    subscribedAppsSnapshot: unknown;
    pageTokenDebug: {
        is_valid?: boolean;
        scopes?: string[];
        granular_scopes?: unknown;
    } | null;
};

/**
 * Two separate Meta steps (both required for Messenger):
 *
 * 1) App — Developer Console → Messenger → Webhooks: set Callback URL to `{BASE_URL}/api/webhook`
 *    and Verify Token to the same value as env `VERIFY_TOKEN`. Complete verification (GET challenge).
 *
 * 2) Page — After connect, `subscribeWebhook` calls `POST /{page-id}/subscribed_apps` with the fields
 *    in MESSENGER_SUBSCRIBED_FIELDS (does not replace step 1).
 *
 * `NEXT_PUBLIC_FACEBOOK_APP_ID` / Login must match `FACEBOOK_APP_ID`. Non-test users need Live app +
 * Advanced Access for `pages_messaging`.
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

    /**
     * Page token scopes (needs FACEBOOK_APP_ID + FACEBOOK_APP_SECRET). Logged to console and returned on connect for debugging.
     */
    private async logPageAccessTokenDebug(pageAccessToken: string) {
        const { appId, appSecret } = envConfig.facebook;
        if (!appId || !appSecret) return null;

        try {
            const { data } = await axios.get(this.graphUrl('/debug_token'), {
                params: {
                    input_token: pageAccessToken,
                    access_token: `${appId}|${appSecret}`
                }
            });
            const info = data?.data;
            if (info) {
                const summary = {
                    is_valid: info.is_valid as boolean | undefined,
                    scopes: info.scopes as string[] | undefined,
                    granular_scopes: info.granular_scopes
                };
                console.log('[Facebook] debug_token (page access token):', summary);
                return summary;
            }
        } catch (e: any) {
            console.warn('[Facebook] debug_token failed:', e.response?.data || e.message);
        }
        return null;
    }

    private async subscribeWebhook(pageUid: string, pageAccessToken: string): Promise<MessengerSubscribeResult> {
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

            const pageTokenDebug = await this.logPageAccessTokenDebug(pageAccessToken);

            return {
                subscribedFields: MESSENGER_SUBSCRIBED_FIELDS,
                postResponse: postData,
                subscribedAppsSnapshot: subscribed,
                pageTokenDebug
            };
        } catch (error: any) {
            const errBody = error.response?.data;
            const fbErr = errBody?.error;
            const detail =
                (fbErr && typeof fbErr.message === 'string' && fbErr.message) ||
                error.message ||
                'Unknown error';
            console.error('[Facebook] subscribed_apps POST error:', {
                pageUid,
                message: error.message,
                response: errBody ?? null
            });
            const suffix = fbErr?.code != null ? ` (Facebook code ${fbErr.code})` : '';
            const err = new Error(`Không thể đăng ký Webhook với Facebook: ${detail}${suffix}`) as Error & {
                status?: number;
                facebookResponse?: unknown;
            };
            err.status = httpCode.serverError.badGateway;
            err.facebookResponse = errBody;
            throw err;
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

        const messenger = await this.subscribeWebhook(res.pageUid, res.pageAccessToken);

        return { ...res, messenger };
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
