import {Router} from 'express';
import { getBoardAndError} from '../../Controllers/Boards';

export const boardsRouter = Router();

boardsRouter.get("/test", (req, res)=>{res.send("test")});
boardsRouter.get("/fail", getBoardAndError);
