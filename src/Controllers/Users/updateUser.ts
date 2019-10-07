import {RequestHandler} from "express";
import {Db, ObjectId} from 'mongodb'
import {mongoClient} from "../../index";


export const updateUser: RequestHandler = async (req, res, next): Promise<void> => {
    const Db = mongoClient.db as Db;
    const collection = Db.collection("users");
    const {userId} = req.params;

    try {
        const user = await collection
            .findOneAndUpdate(
                {_id: new ObjectId(userId)},
                {
                    $set: {
                        ...req.body,
                        updatedAt: new Date()
                    }
                }, {
                    returnOriginal: false,
                    upsert: true,
                });
        res.json(user.value);
    } catch (e) {
        next(e)
    }
};
