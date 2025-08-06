import mongoose from "mongoose";
import { TAdmin } from "./auth.types";
import bcrypt from 'bcryptjs'

const AdminSchema = new mongoose.Schema<TAdmin>({
    nickname: { type: String, required: true },
    password: { type: String, required: true },
    phrase: { type: String, required: true },
    role: {type: String, default: 'sudo'}
})

AdminSchema.pre('save', async function (next) {
    if (!this.isModified('password') && !this.isModified('phrase')) {
        return next()
        
    }
    
    if (!this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }

    if (!this.isModified('phrase')) {
        this.password = await bcrypt.hash(this.phrase, 10)
    }

    next()
})

const Sudo = mongoose.model('Sudo', AdminSchema)

export default Sudo