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
const mongodb_1 = require("mongodb");
const index_1 = require("../../index");
exports.getUserById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const Db = index_1.mongoClient.db;
    const { userId } = req.params;
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
        const user = yield Db.collection("users")
            .findOne({ _id: new mongodb_1.ObjectId(userId) }, { projection: projection });
        res.json(user);
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=getUserById.js.map