import {NextFunction, Request, Response, Application, ErrorRequestHandler} from "express";
import {HttpError} from 'http-errors'
import {ValidationError} from "express-validation";
import {MongoError} from "mongodb";
// TODO: normalize error repsponses for mongo, system, validation errors so front end has a single formatted error
export const errorHandlers = (err: HttpError | Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err, err.stack);
    if (err instanceof ValidationError) {
        res.status(err.status).send(err);
        return;
    }
    if (err instanceof MongoError) {
        res.status(400).send(
            {
                status: 400,
                statusText: 'Bad Request',
                name: err.name,
                errors: [
                    {
                        code: err.code,
                        messages: [err.message],
                    }

                ]
            }
        )
        return;
    }
    res.status((<HttpError>err).status || 500).send(err.message || "An Error Has Occured");
};
