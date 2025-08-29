import mongoose from "mongoose";
import { TContact } from "./contact.type";

const contactSchema = new mongoose.Schema<TContact>({
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    message: { type: String, default: '' },
    createdAt: {type: Date, default: Date.now()}
})

const Contact = mongoose.model('Contact', contactSchema)

export default Contact