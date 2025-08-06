import { Request, Response } from "express";
import { container } from "tsyringe";
import { IAuthService } from "./auth.types";

const AuthService = container.resolve<IAuthService>("IAuthService");

export const login = async (req: Request, res: Response) => {
   const loginDetails = req.body;
   const authResp = await AuthService.login(loginDetails);
   res.status(200).json({
      status: "success",
      data: authResp,
   });
};

export const oneTimeSudoRegister = async (req: Request, res: Response) => {
   const sudoDetails = req.body;
   const sudoUser = await AuthService.oneTimeSudoRegister(sudoDetails);
   res.status(200).json({
      status: "success",
      data: sudoUser,
   });
};
