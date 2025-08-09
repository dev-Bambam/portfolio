import { Router } from 'express';
import bioRoute from '../domain/Bio/Routes/bio.route';
import uploadRouter from '@src/uploads/image/image.route';
import authRouter from '@src/domain/auth/auth.route';
 
const router = Router();

router.use('/bio', bioRoute);
router.use('/upload', uploadRouter);
router.use('/auth', authRouter);

export default router;