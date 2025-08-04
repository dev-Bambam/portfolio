import { Router } from 'express'
import bioRoute from '../domain/Bio/Routes/bio.route'
 
const router = Router()

router.use('/bio', bioRoute)

export default router