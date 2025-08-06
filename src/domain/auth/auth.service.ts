import SudoUser from "./user.model";
import * as authtype from './auth.types'
import { injectable } from "tsyringe";
import bcrypt from 'bcryptjs'
import { BadRequestError } from "@src/shared/error/Custom.error";
import jwt from 'jsonwebtoken'


@injectable()
export class AuthService implements authtype.IAuthService{
    private readonly model = SudoUser
    constructor() { }
    
    async oneTimeSudoRegister(sudo: authtype.TLogin): Promise<authtype.TSudoUser> {
        const sudoUser = await this.model.create(sudo)
        return sudoUser
    }

    async login(loginDetails: authtype.TLogin): Promise<authtype.TAuthResp> {
        const { nickname, password, phrase } = loginDetails
        const user = await this.model.findOne({ nickname })
        const validPassword = await bcrypt.compare(password, user?.password!)
        const validPhrase = await bcrypt.compare(phrase, user?.phrase!)

        if (!validPassword && !validPhrase) {
            throw new BadRequestError('Invalid login details')
        }

        const payload = {
            _id: user?._id,
            role: user?.role
        }

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET_KEY!,
            {expiresIn: '1d'}
        )

        return {
            _id: user?._id!,
            nickname: user?.nickname!,
            token
        }
    }

}