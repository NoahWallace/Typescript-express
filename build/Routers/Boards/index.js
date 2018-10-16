"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.boardsRouter = express_1.Router();
exports.boardsRouter.get("/test", (req, res) => res.json({ woo: 'hoo' }));
exports.boardsRouter.get("/fail", (req, res, next) => next(new Error("o my geez")));
//# sourceMappingURL=index.js.map