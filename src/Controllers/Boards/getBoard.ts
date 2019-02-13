import {RequestHandler} from "express";
import {getBoardsArray} from "../../Services";

export const getBoard: RequestHandler = async (req, res, next): Promise<void> => {
    try {
        const boards = await getBoardsArray();
        res.json(boards);
    } catch (e) {
        next(e)
    }
};

