"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.userObject = {
    create: {
        body: {
            email: joi_1.default.string().email().required(),
            firstName: joi_1.default.string().required(),
            lastName: joi_1.default.string().required(),
        }
    }
};
//# sourceMappingURL=user.object.js.map