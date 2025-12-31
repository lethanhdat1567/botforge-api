import express from 'express';
import { authMiddleware } from '~/middlewares/auth.middleware';
import FolderController from '~/controllers/folder.controller';

const router = express.Router();
router.use(authMiddleware);

router.get('/me', FolderController.getFolders);
router.get('/:folderId/flows', FolderController.getFolderFlows);
router.post('/', FolderController.createFolder);
router.patch('/:folderId', FolderController.updateFolder);
router.delete('/:folderId', FolderController.deleteFolder);
router.post('/:folderId/duplicate', FolderController.duplicateFolder);

export default router;
