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
class MongoConnect {
    constructor() {
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield mongodb_1.MongoClient
                    .connect('mongodb+srv://db_dev_maui_user:2MkEkxnI0c8nB9RF@dev-cluster0-27oms.mongodb.net/test?retryWrites=true&w=majority', MongoConnect.options);
                this.client = client;
                this.db = client.db('dev_maui');
            }
            catch (err) {
                console.error(err);
                throw err;
            }
        });
    }
}
MongoConnect.options = {
    autoReconnect: true,
    keepAlive: true,
    authSource: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true
};
exports.MongoConnect = MongoConnect;
//# sourceMappingURL=MongoConnect.js.map