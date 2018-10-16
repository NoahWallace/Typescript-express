"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.app = express_1.default();
const port = 4000;
exports.app.init = () => exports.app.listen(port, () => {
    console.log(`Listening at ${port}`);
});
//# sourceMappingURL=index.js.map