export type TSudoUser = {
    _id:string
    nickname: string,
    password: string,
    phrase: string,
    role: string
}

export type TLogin = Omit<TSudoUser, '_id'>

export type TAuthResp = Omit<TSudoUser, 'password' |'phrase'|'role'> & {
    token:string
}

export interface IAuthService{
    login(loginDetails: TLogin): Promise<TAuthResp>
    oneTimeSudoRegister(sudo:TLogin): Promise<TSudoUser>
}