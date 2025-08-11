import { Router } from 'express';
import adminRoute from './admin.routes';
import frontendRoute from './frontend.route'

const router = Router();

router.use('/api/v1', adminRoute);
router.use("/api/v1", frontendRoute);

export default router;