import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { TSudoUser } from "../domain/auth/auth.types";
import { AuthenticationError } from "../shared/error/Custom.error";

export interface AuthenticatedRequest extends Request {
   user?: TSudoUser;
}

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
   const authHeader = req.headers.authorization;
   if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AuthenticationError("No token provided");
   }

   const token = authHeader.split(" ")[1];
   const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!);
   if (!decoded) {
      throw new AuthenticationError("Invalid or expired token");
   }
   req.user = decoded as TSudoUser;
   next();
};
