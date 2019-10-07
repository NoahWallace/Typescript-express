"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
exports.getUsers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const Db = index_1.mongoClient.db;
    const { fields } = req.query;
    let projection = {};
    if (fields) {
        projection = fields
            .split(",")
            .reduce((acc, curr) => {
            const key = curr.trim();
            acc[key] = key === "_id" ? 0 : 1;
            return acc;
        }, {});
    }
    try {
        const users = yield Db.collection("users")
            .find()
            .project(projection)
            .skip(0)
            .sort({})
            .limit(0)
            .toArray();
        res.json(users);
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=getUsers.js.map