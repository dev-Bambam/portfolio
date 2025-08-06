import { Router } from 'express'
import bioRoute from '../domain/Bio/Routes/bio.route'
import uploadRouter from '@src/uploads/image/image.route'
 
const router = Router()

router.use('/bio', bioRoute)
router.use('/upload', uploadRouter)

export default router