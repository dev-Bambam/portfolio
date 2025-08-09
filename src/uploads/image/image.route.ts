import { Router } from 'express';
import * as imageController from './image.controller';
import { upload } from '@src/shared/multer';

const router = Router();

router.post('/upload-single-image', upload.single('image'), imageController.singleImageUploadHandler);

export default router;