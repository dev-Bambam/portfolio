import "reflect-metadata";
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "@src/server";

// Skill Controller Tests
// Use supertest and vitest for integration tests
describe("Skill Controller", () => {
   let skillId: string;
   const skillData = {
      name: "TypeScript",
      proficiency: "Advanced",
      category: "Backend",
   };

   it("should create a skill", async () => {
      const res = await request(app).post("/api/v1/skill/create-skill").send(skillData);
      expect(res.status).toBe(201);
      expect(res.body.data.skill.name).toBe(skillData.name);
      skillId = res.body.data.skill._id;
   });

   it("should fetch all skills", async () => {
      const res = await request(app).get("/api/v1/skill/get-all-skill");
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.data.skills)).toBe(true);
   });

   it("should fetch a skill by id", async () => {
      const res = await request(app).get(`/api/v1/skill/get-a-skill/${skillId}`);
      expect(res.status).toBe(200);
      expect(res.body.data.skill._id).toBe(skillId);
   });

   it("should update a skill", async () => {
      const res = await request(app)
         .put(`/api/v1/skill/update-a-skill/${skillId}`)
         .send({ proficiency: "Intermediate" });
      expect(res.status).toBe(200);
      expect(res.body.data.skill.proficiency).toBe("Intermediate");
   });

   it("should delete a skill", async () => {
      const res = await request(app).delete(`/api/v1/skill/delete-skill/${skillId}`);
      expect(res.status).toBe(200);
      expect(res.body.data.deletedId).toBe(skillId);
   });
});
