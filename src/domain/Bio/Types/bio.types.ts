export type TBio = {
    _id: string;
    name: string;
    summary: string;
    fullBio: string;
    profileImageUrl: string;
    socialLinks: [
        {
            name: string;
            url: string;
        }
    ];
    certificates?: [{
        institution: string,
        certImageUrl: string
    }]
};

export type TBioInput = Omit<TBio, "_id">;

export type TBioResponse = TBio;
export type TbioUpdate = Partial<TBio>;

export interface IBioRepo {
   createBio(bioData: TBioInput): Promise<TBioResponse>;
   getBio(): Promise<TBioResponse>;
   update(bioData: TbioUpdate): Promise<TBioResponse>;
}

export interface IBioService {
   createBio(bioData: TBioInput): Promise<TBioResponse>;
   getBio(): Promise<TBioResponse>;
   update(bioData: TbioUpdate): Promise<TBioResponse>;
}
