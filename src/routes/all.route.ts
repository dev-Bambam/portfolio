import { Router } from 'express';
import bioRoute from '../domain/Bio/Routes/bio.route';
import uploadRouter from '@src/uploads/image/image.route';
import skillRouter from '@src/domain/Skill/Routes/skill.route'
import projectRouter from "@src/domain/Project/Routes/project.route"
import howRouter from '@src/domain/how-i-built-this/how.route'
 
const router = Router();

router.use('/bio', bioRoute);
router.use('/upload', uploadRouter);
router.use('/skill', skillRouter)
router.use('/project', projectRouter)
router.use('/how', howRouter)

export default router;