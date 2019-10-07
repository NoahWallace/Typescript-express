"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Controllers_1 = require("../../Controllers");
exports.usersRouter = express_1.Router();
exports.usersRouter.get("/", Controllers_1.getUsers);
exports.usersRouter.get("/:userId", Controllers_1.getUserById);
//# sourceMappingURL=index.js.map