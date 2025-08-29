import { Request, Response } from "express";
import { container } from "tsyringe";
import { ContactService } from "./contact.service";
import { TContactInput } from "./contact.type";

const contactService = container.resolve(ContactService);

export const createContact = async (req: Request, res: Response) => {
    const data = req.body as TContactInput;
    const contact = await contactService.createContact(data);
    res.status(201).json({ status: "success", data: { contact } });
};

export const getAllContacts = async (_req: Request, res: Response) => {
    const contacts = await contactService.getAllContacts();
    res.status(200).json({ status: "success", data: { contacts } });
};

export const getAContact = async (req: Request, res: Response) => {
    const contact = await contactService.getAContact(req.params.id);
    res.status(200).json({ status: "success", data: { contact } });
};

export const deleteContact = async (req: Request, res: Response) => {
    await contactService.deleteContacts(req.params.id);
    res.status(200).json({ status: "success", message: "Contact deleted successfully" });
};