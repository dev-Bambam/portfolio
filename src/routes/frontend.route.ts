import { Router } from 'express';
import readRouter from './fetch.route'

 
const router = Router();

router.use('/read',readRouter);


export default router;