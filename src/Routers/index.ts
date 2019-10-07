import {Router} from 'express';
import {boardsRouter, usersRouter} from "./V1";

export const RouterV1: Router = Router();
export const RouterV2: Router = Router();
//TODO: create user authentication creation route.
//TODO: create user auth verification middleware.

RouterV1.use("/v1/users", usersRouter);
RouterV1.use("/v1/boards", boardsRouter);





