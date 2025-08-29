import { Model } from "mongoose";
import { injectable } from "tsyringe";
import { IContactRepo, TContactInput, TContactOutput } from "./contact.type";
import  Contact  from "./contact.model";
import { NotFoundError } from "../../shared/error/Custom.error";

@injectable()
export class ContactRepo implements IContactRepo {
    private contactModel = Contact

    async createContact(data: TContactInput): Promise<TContactOutput> {
        return this.contactModel.create(data);
    }

    async getAllContacts(): Promise<TContactOutput[]> {
        const contacts = await this.contactModel.find();
        if (!contacts.length) throw new NotFoundError("No contacts found");
        return contacts;
    }

    async getAContact(id: string): Promise<TContactOutput> {
        const contact = await this.contactModel.findById(id);
        if (!contact) throw new NotFoundError("Contact not found");
        return contact;
    }

    async deleteContacts(id: string): Promise<Boolean> {
        const result = await this.contactModel.findByIdAndDelete(id);
        if (!result) throw new NotFoundError("Contact not found");
        return true;
    }
}