import { inject, injectable } from "tsyringe";
import { IRepo, THowIBuiltThis, update, IService } from "./how.types";
import { BadRequestError } from "@src/shared/error/Custom.error";

@injectable()
export class HowIBuiltThisService implements IService {
   constructor(@inject("HowIBuiltThisRepo") private repo: IRepo) {}

   async getDetails(): Promise<THowIBuiltThis> {
      return await this.repo.getDetails();
   }

   async updateDetail(data: update): Promise<THowIBuiltThis> {
      if (!data || Object.keys(data).length === 0)
         throw new BadRequestError("No update data provided");
      return await this.repo.updateDetail(data);
   }
}
