import { Router } from 'express';
import adminRoute from './admin.routes';
import frontendRoute from './frontend.route'

const router = Router();

router.use('/api/v1', adminRoute);

export default router;