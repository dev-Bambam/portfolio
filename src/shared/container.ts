import { BioRepo } from "@src/domain/Bio/Repository/bio.repo";
import { BioService } from "@src/domain/Bio/Service/bio.service";
import { IBioRepo, IBioService } from "@src/domain/Bio/Types/bio.types";
import { container } from "tsyringe";

container.register<IBioRepo>('IBioRepo', {
    useClass: BioRepo
})
container.register<IBioService>('IBioService', {
    useClass: BioService
})