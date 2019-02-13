import {NextFunction, Request, Response, Application, ErrorRequestHandler} from "express";
import { HttpError } from 'http-errors'

export const errorHandlers = (err: HttpError | Error , req: Request, res: Response, next: NextFunction): void => {
        console.error(err.stack);
        res.status((<HttpError>err).status || 500).send(err.message || "An Error Has Occured");
    };
