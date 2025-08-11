export type THowIBuiltThis = {
   architectureOverview: string;
   backendStack: {
      framework: string;
      database: string;
      orm: string;
      realtime: string;
   };
   frontendStack: {
      framework: string;
      styling: string;
   };
   keyFeatures: {
      realtime: string;
      asynchronous: string;
      security: string;
   };
   deployment: {
      containerization: string;
      ciCd: string;
   };
};

export type update = Partial<THowIBuiltThis>

export interface IRepo{
    getDetails(): Promise<THowIBuiltThis>
    updateDetail(data:update): Promise<THowIBuiltThis>
}

export interface IService {
   getDetails(): Promise<THowIBuiltThis>;
   updateDetail(data: update): Promise<THowIBuiltThis>;
}
