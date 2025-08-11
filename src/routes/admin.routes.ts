import { Router } from "express";
import { authenticate } from "@src/middleware/auth";
import adminRoute from '@src/routes/all.route'

const router = Router()

 router.use('/admin', authenticate, adminRoute)

 export default router