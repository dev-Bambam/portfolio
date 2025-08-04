import * as biotype from "../Types/bio.types";
import Bio from "../Model/bio.model";
import { injectable } from "tsyringe";

@injectable()
export class BioRepo implements biotype.IBioRepo {
   private readonly model = Bio;

   async getBio(): Promise<biotype.TBioResponse> {
      const bio = await this.model.findOne();
      return bio as biotype.TBioResponse;
   }

   async update(bioData: biotype.TbioUpdate): Promise<biotype.TBioResponse> {
      let bio = await this.model.findOne();
      Object.assign(bio!, bioData);
      bio?.save();
      return bio as biotype.TBioResponse;
   }
}
