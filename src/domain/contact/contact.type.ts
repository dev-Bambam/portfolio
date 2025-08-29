
export type TContact = {
    _id: string
    name: string
    email: string
    message: string
    createdAt: Date
}

export type TContactInput = Omit<TContact, '_id'>
export type TContactOutput = TContact

export interface IContactRepo {
    createContact(data: TContactInput): Promise<TContactOutput>
    getAllContacts(): Promise<TContactOutput[]>
    getAContact(id:string): Promise<TContactOutput>
    deleteContacts(id: string): Promise<Boolean>
}

export interface IContactService {
   createContact(data: TContactInput): Promise<TContactOutput>;
   getAllContacts(): Promise<TContactOutput[]>;
   getAContact(id: string): Promise<TContactOutput>;
   deleteContacts(id: string): Promise<Boolean>;
}