import { Router } from "express";
import * as BioController from '../Controller/bio.controller'

const router = Router()

router.post('/create-bio', BioController.createBio)
router.get('/fetch-bio', BioController.getBio)
router.put('/update-bio', BioController.updateBio)

export default router