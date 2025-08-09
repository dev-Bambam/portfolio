import BaseError from "./Base.error";
import { ErrorObject } from "ajv";

export class NotFoundError extends BaseError {
   constructor(public message = "Resource not found") {
      super(message, 404, "NOTFOUND_ERR");
   }
}

export class BadRequestError extends BaseError {
   constructor(public message: string) {
      super(message, 400, "BAD_REQUEST_ERR");
   }
}

export class ValidationError extends BaseError {
   constructor(public error: ErrorObject[]) {
      super("Invalid request body", 400, "VALIDATION_ERR");
   }
}

export class AuthenticationError extends BaseError {
   constructor(message: string = "Authentication failed") {
      super(message, 401, "AuthenticationError", "error", true);
      this.name = "AuthenticationError";
   }
}
