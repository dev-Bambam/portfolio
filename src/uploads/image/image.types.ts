export interface TCloudinaryUploadResult {
    imageUrl: string;
    publicId: string;
}

export interface IUploadService {
    uploadSingleImage(buffer: Buffer): Promise<TCloudinaryUploadResult>;
}