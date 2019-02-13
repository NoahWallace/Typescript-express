import {Router} from 'express';
import {getBoard, getBoardAndError} from '../../Controllers/Boards';

export const boardsRouter = Router();

boardsRouter.get("/test", getBoard);
boardsRouter.get("/fail", getBoardAndError);
