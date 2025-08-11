import { Router } from 'express';
import bioRoute from '../domain/Bio/Routes/bio.route';
import uploadRouter from '@src/uploads/image/image.route';
import authRouter from '@src/domain/auth/auth.route';
import skillRouter from '@src/domain/Skill/Routes/skill.route'
import projectRouter from "@src/domain/Project/Routes/project.route"
 
const router = Router();

router.use('/bio', bioRoute);
router.use('/upload', uploadRouter);
router.use('/auth', authRouter);
router.use('/skill', skillRouter)
router.use('/project', projectRouter)

export default router;