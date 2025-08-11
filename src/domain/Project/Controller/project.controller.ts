import { Request, Response } from "express";
import { container } from "tsyringe";
import { ProjectService } from "../Service/project.service";

const projectService = container.resolve(ProjectService);

export const createProject = async (req: Request, res: Response) => {
   const project = await projectService.createProject(req.body);
   res.status(201).json({ status: "success", data: { project } });
};

export const getAllProjects = async (req: Request, res: Response) => {
   const projects = await projectService.getAllProjects();
   res.status(200).json({ status: "success", data: { projects } });
};

export const getProjectById = async (req: Request, res: Response) => {
   const project = await projectService.getProjectById(req.params.id);
   res.status(200).json({ status: "success", data: { project } });
};

export const getProjectBySlug = async (req: Request, res: Response) => {
   const project = await projectService.getProjectBySlug(req.params.slug);
   res.status(200).json({ status: "success", data: { project } });
};

export const updateProject = async (req: Request, res: Response) => {
   const updated = await projectService.updateProject(req.params.id, req.body);
   res.status(201).json({ status: "success", data: { updated } });
};

export const deleteProject = async (req: Request, res: Response) => {
   const deletedId = await projectService.deleteProject(req.params.id);
   res.status(200).json({ status: "success", data: { deletedId } });
};
