import mongoose from "mongoose";
import { TProject } from "../types/project.types";

const projectSchema = new mongoose.Schema<TProject>({
    slug: { type: String, unique: true, required: true, default: '' },
    title: { type: String, required: true, default: '' },
    shortDescription: { type: String, required: true, default: '' },
    fullDescription: { type: String, required: true, default: '' },
    techStack: [{ type: String, required: true, default: '' }],
    screenshot: { type: String, default: '' },
    githubUrl: { type: String, required: true, default: '' },
    liveUrl: { type: String, default: '' },
    docUrl: {type: String, required:true, default: ''}
})

const Project = mongoose.model('Project', projectSchema)

export default Project