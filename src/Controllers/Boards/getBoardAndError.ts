import {RequestHandler} from "express";
import {getBoardsArray} from '../../Services'

export const getBoardAndError: RequestHandler = async (req, res, next): Promise<void> => {
    try {
        const boards = await getBoardsArray(true);
        res.json(boards);
    } catch (e) {

        next(e)
    }
};
