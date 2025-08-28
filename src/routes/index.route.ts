import { Router } from 'express';
import adminRoute from './admin.routes';
import frontendRoute from './frontend.route'
import authRoute from '@src/domain/auth/auth.route'

const router = Router();

router.use('/api/v1', adminRoute);
router.use("/api/v1", frontendRoute);
router.use("/api/v1/auth", authRoute);

export default router;