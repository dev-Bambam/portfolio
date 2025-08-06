import { injectable, inject } from "tsyringe";
import * as biotype from "../Types/bio.types";

@injectable()
export class BioService implements biotype.IBioService {
   constructor(@inject("IBioRepo") private BioRepo: biotype.IBioRepo) {}

   async createBio(bioData: biotype.TBioInput): Promise<biotype.TBioResponse> {
      const bio = await this.BioRepo.createBio(bioData)
      return bio
   }
   
   async getBio(): Promise<biotype.TBioResponse> {
      const bio = await this.BioRepo.getBio();
      return bio;
   }

   async update(bioData: biotype.TbioUpdate): Promise<biotype.TBioResponse> {
      const bio = await this.BioRepo.update(bioData);
      return bio;
   }
}
