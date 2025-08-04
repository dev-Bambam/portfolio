import { Router } from "express";
import * as BioController from '../Controller/bio.controller'

const router = Router()

router.get('/fetch-bio', BioController.getBio)
router.put('/update-bio', BioController.updateBio)

export default router