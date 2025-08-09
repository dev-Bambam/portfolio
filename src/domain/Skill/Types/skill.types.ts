export type TSkillCat =
   | "Frontend"
   | "Backend"
   | "DevOps"
   | "Datababase"
   | "AI/ML"
   | "Tools"
   | "Business";

export type TSkill = {
   _id: string;
   name: string;
   proficiency: "Beginner" | "Intermediate" | "Advanced";
   category: TSkillCat;
};

export type TSkillInput = Omit<TSkill, "_id">;
export type TSkillUpdate = Partial<TSkillInput>;

export interface ISkillRepo {
   findAll(category?: TSkillCat): Promise<TSkill[] | null>;
   findById(skillId: string): Promise<TSkill | null>;
   create(data: TSkillInput): Promise<TSkill>;
   update(skillId: string, data: TSkillUpdate): Promise<TSkill | null>;
   delete(skillId: string): Promise<string>;
}

export interface ISkillService {
   createSkill(data: TSkillInput): Promise<TSkill>;
   fetchAllSkill(category?: TSkillCat): Promise<TSkill[] | null>;
   fetchASkill(skillId: string): Promise<TSkill | null>;
   updateASkill(skillId: string, data: TSkillUpdate): Promise<TSkill | null>;
   delete(skillId: string): Promise<string>;
}
