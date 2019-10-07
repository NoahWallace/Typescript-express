import {RequestHandler} from "express";
import {ObjectId} from 'mongodb'
import {mongoClient} from "../../index";


export const getUserById: RequestHandler = async (req, res, next): Promise<void> => {
    const Db = mongoClient.db;
    const {userId} = req.params;
    const {fields} = req.query;
    let projection = {};
    if (fields) {
        projection = fields
            .split(",")
            .reduce((acc: { [key: string]: 0 | 1 }, curr: string) => {
                const key = curr.trim();
                acc[key] = key === "_id" ? 0 : 1;
                return acc;
            }, {})
    }
    try {
        const user = await Db.collection("users")
            .findOne({_id: new ObjectId(userId)}, {projection: projection});
        res.json(user);
    } catch (e) {
        next(e)
    }
};
