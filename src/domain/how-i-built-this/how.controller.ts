import { Request, Response } from "express";
import { container } from "tsyringe";
import { HowIBuiltThisService } from "./how.service";

const howService = container.resolve(HowIBuiltThisService);

export const getDetails = async (req: Request, res: Response) => {
   const details = await howService.getDetails();
   res.status(201).json({ status: "success", data: { details } });
};

export const updateDetail = async (req: Request, res: Response) => {
   const updated = await howService.updateDetail(req.body);
   res.status(201).json({ status: "success", data: { updated } });
};
