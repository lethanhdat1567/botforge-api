import facebookAuthService from '~/services/facebook-auth.service';

class FacebookAuthController {
    async checkConnected(req: any, res: any) {
        const isConnected = await facebookAuthService.isFacebookConnected(req.user.id);

        return res.success({ isConnected });
    }
    async createAccount(req: any, res: any) {
        const result = await facebookAuthService.create(
            req.user.id,
            req.body.fbAccessToken,
            req.body.facebookProviderId
        );

        return res.success(result);
    }

    async listPages(req: any, res: any) {
        const result = await facebookAuthService.getPages(req.user.id);

        return res.success(result);
    }

    async logout(req: any, res: any) {
        const result = await facebookAuthService.logout(req.user.id);

        return res.success(result);
    }
}

export default new FacebookAuthController();
