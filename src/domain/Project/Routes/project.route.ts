import { Router } from "express";
import * as projectController from "../Controller/project.controller";

const router = Router();

router.post("/create-project", projectController.createProject);
router.get("/get-all-projects", projectController.getAllProjects);
router.get("/get-a-project/:id", projectController.getProjectById);
router.get("/get-project-by-slug/:slug", projectController.getProjectBySlug);
router.put("/update-project/:id", projectController.updateProject);
router.delete("/delete-project/:id", projectController.deleteProject);

export default router;
