import "reflect-metadata";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { SkillService } from "../../src/domain/Skill/Service/skill.service";
import {
   ISkillRepo,
   TSkillInput,
   TSkill,
   TSkillUpdate,
   TSkillCat,
} from "../../src/domain/Skill/Types/skill.types";

// Skill Service Tests
// Use vitest for unit tests

describe("SkillService", () => {
   let service: SkillService;
   let repo: any;

   beforeEach(() => {
      repo = {
         findAll: vi.fn(),
         findById: vi.fn(),
         create: vi.fn(),
         update: vi.fn(),
         delete: vi.fn(),
      };
      service = new SkillService(repo);
   });

   it("should create a skill", async () => {
      const input: TSkillInput = {
         name: "TypeScript",
         proficiency: "Advanced",
         category: "Backend",
      };
      const skill: TSkill = { ...input, _id: "1" };
      repo.create.mockResolvedValue(skill);
      const result = await service.createSkill(input);
      expect(result).toEqual(skill);
      expect(repo.create).toHaveBeenCalledWith(input);
   });

   it("should fetch all skills", async () => {
      const skills: TSkill[] = [
         { _id: "1", name: "TypeScript", proficiency: "Advanced", category: "Backend" },
      ];
      repo.findAll.mockResolvedValue(skills);
      const result = await service.fetchAllSkill();
      expect(result).toEqual(skills);
      expect(repo.findAll).toHaveBeenCalled();
   });

   it("should fetch a skill by id", async () => {
      const skill: TSkill = {
         _id: "1",
         name: "TypeScript",
         proficiency: "Advanced",
         category: "Backend",
      };
      repo.findById.mockResolvedValue(skill);
      const result = await service.fetchASkill("1");
      expect(result).toEqual(skill);
      expect(repo.findById).toHaveBeenCalledWith("1");
   });

   it("should update a skill", async () => {
      const update: TSkillUpdate = { proficiency: "Intermediate" };
      const skill: TSkill = {
         _id: "1",
         name: "TypeScript",
         proficiency: "Intermediate",
         category: "Backend",
      };
      repo.update.mockResolvedValue(skill);
      const result = await service.updateASkill("1", update);
      expect(result).toEqual(skill);
      expect(repo.update).toHaveBeenCalledWith("1", update);
   });

   it("should delete a skill", async () => {
      repo.delete.mockResolvedValue("1");
      const result = await service.delete("1");
      expect(result).toBe("1");
      expect(repo.delete).toHaveBeenCalledWith("1");
   });
});
