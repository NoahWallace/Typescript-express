"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const V1_1 = require("./V1");
exports.RouterV1 = express_1.Router();
exports.RouterV2 = express_1.Router();
exports.RouterV1.use("/v1/users", V1_1.usersRouter);
exports.RouterV1.use("/v1/boards", V1_1.boardsRouter);
//# sourceMappingURL=index.js.map