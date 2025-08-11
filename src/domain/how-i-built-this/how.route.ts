import { Router } from "express";
import * as howController from "./how.controller";

const router = Router();

router.get("/get-details", howController.getDetails);
router.put("/update-details", howController.updateDetail);

export default router;
