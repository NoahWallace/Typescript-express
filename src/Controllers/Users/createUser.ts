import {RequestHandler} from "express";
import {Db} from 'mongodb'
import {mongoClient} from "../../index";


export const createUser: RequestHandler = async (req, res, next): Promise<void> => {
    const Db = mongoClient.db as Db;
    const collection = Db.collection("users");


    try {
        const user = await collection
            .insertOne(
                {
                    ...req.body,
                    updatedAt: new Date(),
                    createdAt: new Date(),
                });
        res.json(user.ops[0]);
    } catch (e) {
        console.log(e)
        next(e)
    }
};
