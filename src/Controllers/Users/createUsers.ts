import {RequestHandler} from "express";
import {Db, ObjectId} from 'mongodb'
import {mongoClient} from "../../index";


export const createUsers: RequestHandler = async (req, res, next): Promise<void> => {
    const Db = mongoClient.db as Db;
    const collection = Db.collection("users");
    const reqUsers = req.body.map((user:any) => {
        user.createdAt = new Date();
        user.updatedAt = new Date();
        return user;
    })

    try {
        const users = await collection
            .insertMany(reqUsers);
        res.json(users.ops);
    } catch (e) {
        next(e)
    }
};
