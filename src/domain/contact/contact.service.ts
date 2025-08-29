import { injectable, inject } from "tsyringe";
import { IContactRepo, IContactService, TContactInput, TContactOutput } from "./contact.type";

@injectable()
export class ContactService implements IContactService {
    constructor(
        @inject("IContactRepo") private readonly contactRepo: IContactRepo
    ) {}

    async createContact(data: TContactInput): Promise<TContactOutput> {
        return this.contactRepo.createContact(data);
    }

    async getAllContacts(): Promise<TContactOutput[]> {
        return this.contactRepo.getAllContacts();
    }

    async getAContact(id: string): Promise<TContactOutput> {
        return this.contactRepo.getAContact(id);
    }

    async deleteContacts(id: string): Promise<Boolean> {
        return this.contactRepo.deleteContacts(id);
    }
}