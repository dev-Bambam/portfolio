import { Request, Response } from "express";
import { container } from "tsyringe";
import { ISkillService, TSkillInput, TSkillUpdate, TSkillCat } from "../Types/skill.types";

const skillService = container.resolve<ISkillService>("ISkillService");

export const createSkill = async (req: Request, res: Response) => {
   const skillData: TSkillInput = req.body;
   const skill = await skillService.createSkill(skillData);
   res.status(201).json({ status: "success", data: { skill } });
};

export const fetchAllSkill = async (req: Request, res: Response) => {
   const category = req.query.category as TSkillCat | undefined;
   const skills = await skillService.fetchAllSkill(category);
   res.status(200).json({ status: "success", data: { skills } });
};

export const fetchASkill = async (req: Request, res: Response) => {
   const skillId = req.params.skillId;
   const skill = await skillService.fetchASkill(skillId);
   res.status(200).json({ status: "success", data: { skill } });
};

export const updateASkill = async (req: Request, res: Response) => {
   const skillId = req.params.skillId;
   const updateData: TSkillUpdate = req.body;
   const skill = await skillService.updateASkill(skillId, updateData);
   res.status(200).json({ status: "success", data: { skill } });
};

export const deleteSkill = async (req: Request, res: Response) => {
   const skillId = req.params.skillId;
   const deletedId = await skillService.delete(skillId);
   res.status(200).json({ status: "success", data: { deletedId } });
};
