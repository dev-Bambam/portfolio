import { Router } from "express";
import indexRoute from './all.route'

const router = Router()

router.use('/api/v1', indexRoute)

export default router