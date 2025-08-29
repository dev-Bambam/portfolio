import { Router } from "express";
import * as Controller from './contact.controller'

const router = Router()

router.post('/send-message', Controller.createContact)
router.get("/fetch-all-message", Controller.getAllContacts);
router.get("/fetch-a-message/:id", Controller.getAContact);
router.delete('/delete-a-message/:id', Controller.deleteContact)

export default router