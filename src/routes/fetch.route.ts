import { Router } from "express";
import { fetchAllSkill, fetchASkill } from "@src/domain/Skill/Controller/skill.controller";
import {
   getAllProjects,
   getProjectById,
   getProjectBySlug,
} from "@src/domain/Project/Controller/project.controller";
import { getBio } from "@src/domain/Bio/Controller/bio.controller";
import { getDetails as getHowIBuiltThisDetails } from "@src/domain/how-i-built-this/how.controller";

const router = Router();

// Skill domain
router.get("/skills", fetchAllSkill);
router.get("/skills/:skillId", fetchASkill);

// Project domain
router.get("/projects", getAllProjects);
router.get("/projects/:id", getProjectById);
router.get("/projects/slug/:slug", getProjectBySlug);

// Bio domain
router.get("/bio", getBio);

// How I Built This domain
router.get("/how-i-built-this", getHowIBuiltThisDetails);

export default router;
