import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { injectable } from "tsyringe";
import * as uploadtype from './image.types'
import logger from 'jet-logger'

@injectable()
export class UploadService implements uploadtype.IUploadService{
    constructor() { }
    
    async uploadSingleImage(buffer: Buffer): Promise<uploadtype.TCloudinaryUploadResult> {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'potfolio_app_image' },
                (error: any, result?: UploadApiResponse) => {
                    if (error) {
                        logger.err(`Cloudinary upload stream error:${JSON.stringify(error)}`);
                        return reject(error)
                    };
                    if (!result) {
                        return reject(new Error('Cloudinary upload stream did not return result'))
                    }
                    resolve({
                        imageUrl: result.secure_url,
                        publicId: result.public_id
                    })
                }
            )
            uploadStream.end(buffer) // pipe buffer from memory into the Cloudinary upload stream
        })
    }
}