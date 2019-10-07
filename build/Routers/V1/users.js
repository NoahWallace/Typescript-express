"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validation_1 = __importDefault(require("express-validation"));
const Controllers_1 = require("../../Controllers");
exports.usersRouter = express_1.Router();
exports.usersRouter.get("/", Controllers_1.getUsers);
exports.usersRouter.get("/:userId", Controllers_1.getUserById);
exports.usersRouter.put("/:userId", Controllers_1.updateUser);
exports.usersRouter.post("/", express_validation_1.default(Controllers_1.userSchema.createMany), Controllers_1.createUsers);
exports.usersRouter.post("/user", express_validation_1.default(Controllers_1.userSchema.create), Controllers_1.createUser);
//# sourceMappingURL=users.js.map