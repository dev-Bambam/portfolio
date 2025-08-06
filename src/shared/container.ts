import { BioRepo } from "@src/domain/Bio/Repository/bio.repo";
import { BioService } from "@src/domain/Bio/Service/bio.service";
import { IBioRepo, IBioService } from "@src/domain/Bio/Types/bio.types";
import { UploadService } from "@src/uploads/image/image.service";
import { IUploadService } from "@src/uploads/image/image.types";
import { container } from "tsyringe";

container.register<IBioRepo>('IBioRepo', {
    useClass: BioRepo
})
container.register<IBioService>('IBioService', {
    useClass: BioService
})
container.register<IUploadService>('IUploadService', {
    useClass: UploadService
})