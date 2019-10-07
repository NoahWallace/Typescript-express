import {Router} from 'express';
import validate from "express-validation";
import {
    getUsers,
    getUserById,
    updateUser,
    createUser,
    createUsers,
    userSchema
} from '../../Controllers';

export const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:userId", getUserById);

usersRouter.put("/:userId", updateUser);

usersRouter.post("/", validate(userSchema.createMany), createUsers);
usersRouter.post("/user", validate(userSchema.create), createUser);

