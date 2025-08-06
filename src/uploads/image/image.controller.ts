import { Request, Response } from "express";
import { container } from "tsyringe";
import { IUploadService } from "./image.types";

const UploadService = container.resolve<IUploadService>('IUploadService')

export const singleImageUploadHandler = async (req: Request, res: Response) => {
    const imageFile = req.file
    if (!imageFile) {
        throw new Error('Image not uploaded')
    }

    const uploadResult = await UploadService.uploadSingleImage(imageFile.buffer)

    res.status(200).json({
        status: 'success',
        data: {
            imageUrl: uploadResult.imageUrl
        }
    })
}