export type TAdmin = {
    _id:string
    nickname: string,
    password: string,
    phrase: string,
    role: string
}

export type TLogin = Omit<TAdmin, '_id'>

export type TAuthResp = TAdmin & {
    token:string
}

export interface IAuthService{
    login(loginDetails:TLogin): Promise<TAuthResp>
}