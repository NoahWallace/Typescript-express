"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const user = {
    email: joi_1.default.string().email(),
    firstName: joi_1.default.string(),
    lastName: joi_1.default.string(),
};
exports.userSchema = {
    create: {
        body: {
            email: user.email.required(),
            firstName: user.firstName.required(),
            lastName: user.lastName.required(),
        }
    },
    createMany: {
        body: joi_1.default.array().items({
            email: user.email.required(),
            firstName: user.firstName.required(),
            lastName: user.lastName.required(),
        })
    }
};
//# sourceMappingURL=user.schema.js.map