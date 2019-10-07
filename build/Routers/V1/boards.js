"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Boards_1 = require("../../Controllers/Boards");
exports.boardsRouter = express_1.Router();
exports.boardsRouter.get("/test", (req, res) => { res.send("test"); });
exports.boardsRouter.get("/fail", Boards_1.getBoardAndError);
//# sourceMappingURL=boards.js.map