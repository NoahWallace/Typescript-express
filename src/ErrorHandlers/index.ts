import {NextFunction, Request, Response, Application, ErrorRequestHandler} from "express";

export const errorHandlers = (err: Error, req: Request, res: Response, next: NextFunction): void => {
        console.error(err.stack);
        res.status(500).send("whoopsy");
    };
