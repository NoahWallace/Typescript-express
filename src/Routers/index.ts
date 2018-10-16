import { Router } from  'express';
import {boardsRouter} from "./Boards";

export const RouterV1: Router = Router();
export const RouterV2: Router = Router();

RouterV1.use("/v1/boards",boardsRouter);
RouterV2.use("/v2/boards",boardsRouter);





