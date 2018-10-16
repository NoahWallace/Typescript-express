"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Boards_1 = require("./Boards");
exports.RouterV1 = express_1.Router();
exports.RouterV2 = express_1.Router();
exports.RouterV1.use(Boards_1.boardsRouter);
exports.RouterV2.use("/v2/boards", Boards_1.boardsRouter);
//# sourceMappingURL=index.js.map