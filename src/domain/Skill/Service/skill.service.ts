import { injectable, inject } from "tsyringe";
import {
   ISkillService,
   TSkillInput,
   TSkill,
   TSkillUpdate,
   TSkillCat,
   ISkillRepo,
} from "../Types/skill.types";

@injectable()
export class SkillService implements ISkillService {
   constructor(@inject("ISkillRepo") private repo: ISkillRepo) {}

   async createSkill(data: TSkillInput): Promise<TSkill> {
      return await this.repo.create(data);
   }

   async fetchAllSkill(category?: TSkillCat): Promise<TSkill[] | null> {
      return await this.repo.findAll(category);
   }

   async fetchASkill(skillId: string): Promise<TSkill | null> {
      return await this.repo.findById(skillId);
   }

   async updateASkill(skillId: string, data: TSkillUpdate): Promise<TSkill | null> {
      return await this.repo.update(skillId, data);
   }

   async delete(skillId: string): Promise<string> {
      return await this.repo.delete(skillId);
   }
}
