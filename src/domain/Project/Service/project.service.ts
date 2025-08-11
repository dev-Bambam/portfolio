import { inject, injectable } from "tsyringe";
import slugify from "slugify";
import {
   IProjectRepo,
   TProjectInput,
   TProjectOutput,
   TUpdateProject,
} from "../types/project.types";
import { NotFoundError, BadRequestError } from "@src/shared/error/Custom.error";

@injectable()
export class ProjectService {
   constructor(@inject("ProjectRepo") private projectRepo: IProjectRepo) {}

   async createProject(data: TProjectInput): Promise<TProjectOutput> {
      if (!data.title) throw new BadRequestError("Project title is required");
      const slug = slugify(data.title, { lower: true });
      const projectData = { ...data, slug };
      return await this.projectRepo.create(projectData);
   }

   async getAllProjects(): Promise<TProjectOutput[]> {
      const projects = await this.projectRepo.findAll();
      return Array.isArray(projects) ? projects : [projects];
   }

   async getProjectById(id: string): Promise<TProjectOutput> {
      const project = await this.projectRepo.findById(id);
      if (!project) throw new NotFoundError("Project not found");
      return project;
   }

   async getProjectBySlug(slug: string): Promise<TProjectOutput> {
      const project = await this.projectRepo.findBySlug(slug);
      if (!project) throw new NotFoundError("Project not found");
      return project;
   }

   async updateProject(
      id: string,
      data: TUpdateProject & { slug?: string }
   ): Promise<TProjectOutput> {
      if (data.title) {
         data.slug = slugify(data.title, { lower: true });
      }
      const updated = await this.projectRepo.update(id, data);
      if (!updated) throw new NotFoundError("Project not found");
      return updated as TProjectOutput;
   }

   async deleteProject(id: string): Promise<string> {
      return await this.projectRepo.delete(id);
   }
}
