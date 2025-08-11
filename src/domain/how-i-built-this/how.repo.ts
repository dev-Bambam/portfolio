import { THowIBuiltThis, update, IRepo } from "./how.types";
import { NotFoundError } from "@src/shared/error/Custom.error";
import HowIBuiltThisModel from "./how.model";

export class HowIBuiltThisRepo implements IRepo {
   async getDetails(): Promise<THowIBuiltThis> {
      const details = await HowIBuiltThisModel.findOne();
      if (!details) throw new NotFoundError("Details not found");
      return details.toObject();
   }

   async updateDetail(data: update): Promise<THowIBuiltThis> {
      const updated = await HowIBuiltThisModel.findOneAndUpdate({}, data, {
         new: true,
         upsert: true,
      });
      if (!updated) throw new NotFoundError("Details not found");
      return updated.toObject();
   }
}
