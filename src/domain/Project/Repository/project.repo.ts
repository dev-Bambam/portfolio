import Project from "../model/project.model";
import {
   IProjectRepo,
   TProjectInput,
   TProjectOutput,
   TUpdateProject,
} from "../types/project.types";
import { NotFoundError, BadRequestError } from "@src/shared/error/Custom.error";

export class ProjectRepo implements IProjectRepo {
   async create(data: TProjectInput): Promise<TProjectOutput> {
      if (
         !data.title ||
         !data.shortDescription ||
         !data.fullDescription ||
         !data.techStack ||
         !data.githubUrl ||
         !data.docUrl
      ) {
         throw new BadRequestError("Missing required project fields");
      }
      const project = await Project.create(data);
      return project.toObject();
   }

   async findAll(): Promise<TProjectOutput[]> {
      return await Project.find().lean<TProjectOutput[]>();
   }

   async findById(projectId: string): Promise<TProjectOutput | null> {
      return await Project.findById(projectId).lean<TProjectOutput>();
   }

   async findBySlug(slug: string): Promise<TProjectOutput | null> {
      return await Project.findOne({ slug }).lean<TProjectOutput>();
   }

   async update(projectId: string, data: TUpdateProject): Promise<TProjectInput | null> {
      const updated = await Project.findByIdAndUpdate(projectId, data, {
         new: true,
      }).lean<TProjectInput>();
      if (!updated) throw new NotFoundError("Project not found");
      return updated;
   }

   async delete(projectId: string): Promise<string> {
      const deleted = await Project.findByIdAndDelete(projectId);
      if (!deleted) throw new NotFoundError("Project not found");
      return projectId;
   }
}
