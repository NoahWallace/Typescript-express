import { Router } from 'express';

export const boardsRouter = Router();


boardsRouter.get("/test",(req,res)=>res.json({woo:'hoo'}));
boardsRouter.get("/fail",(req,res,next)=>next(new Error("o my geez")));
