import { ISkillRepo, TSkill, TSkillInput, TSkillUpdate, TSkillCat } from "../Types/skill.types";
import { NotFoundError, BadRequestError } from "../../../shared/error/Custom.error";
import Skill from "../Model/skill.model";

export class SkillRepo implements ISkillRepo {
   async findAll(category?: TSkillCat): Promise<TSkill[] | null> {
      const query = category ? { category } : {};
      const skills = await Skill.find(query).lean<TSkill[]>();
      return skills.length ? skills : null;
   }

   async findById(skillId: string): Promise<TSkill | null> {
      const skill = await Skill.findById(skillId).lean<TSkill>();
      return skill || null;
   }

   async create(data: TSkillInput): Promise<TSkill> {
      if (!data.name || !data.proficiency || !data.category) {
         throw new BadRequestError("Missing required skill fields");
      }
      const newSkill = await Skill.create(data);
      return newSkill.toObject();
   }

   async update(skillId: string, data: TSkillUpdate): Promise<TSkill | null> {
      const updated = await Skill.findByIdAndUpdate(skillId, data, { new: true }).lean<TSkill>();
      if (!updated) throw new NotFoundError("Skill not found");
      return updated;
   }

   async delete(skillId: string): Promise<string> {
      const deleted = await Skill.findByIdAndDelete(skillId);
      if (!deleted) throw new NotFoundError("Skill not found");
      return skillId;
   }
}
