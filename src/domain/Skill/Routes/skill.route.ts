import { Router } from "express";
import * as skillController from "../Controller/skill.controller";

const router = Router();

router.post("/create-skill", skillController.createSkill);
router.get("/get-all-skill", skillController.fetchAllSkill);
router.get("/get-a-skill/:skillId", skillController.fetchASkill);
router.put("/update-a-skill/:skillId", skillController.updateASkill);
router.delete("/delete-skill/:skillId", skillController.deleteSkill);

export default router;
