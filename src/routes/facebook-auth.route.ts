import { Router } from 'express';
import facebookAuthController from '~/controllers/facebook-auth.controller';
import { authMiddleware } from '~/middlewares/auth.middleware';

const router = Router();

router.use(authMiddleware);

router.get('/check-connect', facebookAuthController.checkConnected);
router.get('/list-pages', facebookAuthController.listPages);
router.post('/login', facebookAuthController.createAccount);
router.delete('/logout', facebookAuthController.logout);

export default router;
