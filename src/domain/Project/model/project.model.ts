import mongoose from "mongoose";
import { TProject } from "../types/project.types";

const projectSchema = new mongoose.Schema<TProject>({
    slug: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    techStack: [{ type: String, required: true }],
    screenshot: { type: String, default: undefined },
    githubUrl: { type: String, required: true },
    liveUrl: { type: String, default: undefined },
    docUrl: {type: String, required:true}
})

const Project = mongoose.model('Project', projectSchema)

export default Project