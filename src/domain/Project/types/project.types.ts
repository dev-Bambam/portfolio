export type TProject = {
    _id: string
    title:string
    slug: string
    shortDescription: string
    fullDescription: string
    techStack: string[]
    screenshot?: string
    githubUrl: string
    liveUrl?: string
    docUrl: string
}

export type TProjectInput = Omit<TProject, '_id' | 'slug'>

export type TProjectOutput = TProject  
export type TUpdateProject = Partial<TProjectInput>

export interface IProjectRepo{
    create(data: TProjectInput): Promise<TProjectOutput>
    findAll(): Promise<TProjectOutput[]>
    findById(projectId: string): Promise<TProjectOutput | null>
    findBySlug(slug: string): Promise<TProjectOutput | null>
    update(projectId: string, data: TUpdateProject): Promise<TProjectInput | null>
    delete(projectId:string): Promise<string>
}

export interface IProjectService {
   create(data: TProjectInput): Promise<TProjectOutput>;
   findAll(): Promise<TProjectOutput>;
   findById(projectId: string): Promise<TProjectOutput | null>;
   findBySlug(slug: string): Promise<TProjectOutput | null>;
   update(projectId: string, data: TUpdateProject): Promise<TProjectInput | null>;
   delete(projectId: string): Promise<string>;
}