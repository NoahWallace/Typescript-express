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
exports.updateUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const Db = index_1.mongoClient.db;
    const collection = Db.collection("users");
    const { userId } = req.params;
    try {
        const user = yield collection
            .findOneAndUpdate({ _id: new mongodb_1.ObjectId(userId) }, {
            $set: Object.assign({}, req.body, { updatedAt: new Date() })
        }, {
            returnOriginal: false,
            upsert: true,
        });
        res.json(user.value);
    }
    catch (e) {
        next(e);
    }
});
//# sourceMappingURL=updateUser.js.map