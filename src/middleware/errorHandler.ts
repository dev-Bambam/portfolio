import BaseError from "@src/shared/error/Base.error";
import { Request, Response, NextFunction } from "express";
import { ValidationError } from '@src/shared/error/Custom.error'
import logger from 'jet-logger'

const globalErrorHandler = async (err: BaseError, _req: Request, res: Response, _next: NextFunction) => {
    let message = err.message
    const status = err.status ?? 'fail'
    const statusCode = err.statusCode ?? 500
    const type = err.type ?? 'SERVER_ERR'
    let meta = {}

    if (err instanceof ValidationError) {
        meta = {
            error: err.error
        }
    }

    if (!err.isOperational) {
        logger.err(err.message)
        message = 'The server is running some errors, will be up soon'
    }

    res.status(statusCode).json({
        status,
        message,
        type,
        ...meta
    })
}

export default globalErrorHandler