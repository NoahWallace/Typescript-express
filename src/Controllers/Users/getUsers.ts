import {RequestHandler} from "express";
import {mongoClient} from "../../index";
import {Db} from "mongodb";


export const getUsers: RequestHandler = async (req, res, next): Promise<void> => {
    const Db = mongoClient.db as Db;
    // TODO: finish skip and sort parsing method
    // TODO: create reusable projection method
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
        const users = await Db.collection("users")
            .find()
            .project(projection)
            .skip(0)
            .sort({})
            .limit(0)
            .toArray();
        res.json(users);
    } catch (e) {
        next(e)
    }
};

