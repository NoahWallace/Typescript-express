"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("@feathersjs/express"));
const Routers_1 = require("./Routers");
const App_1 = require("./App");
const cors_1 = __importDefault(require("cors"));
const ErrorHandlers_1 = require("./ErrorHandlers");
const MongoDb_1 = require("./Services/MongoDb");
const mongoClient = new MongoDb_1.MongoConnect();
exports.mongoClient = mongoClient;
App_1.app.use(cors_1.default());
App_1.app.use(express_1.default.json());
App_1.app.use(express_1.default.urlencoded({ extended: true }));
App_1.app.use(Routers_1.RouterV1);
App_1.app.use(Routers_1.RouterV2);
App_1.app.configure(express_1.default.rest());
App_1.app.use(ErrorHandlers_1.errorHandlers);
mongoClient.init()
    .then(() => {
    App_1.app.init();
}).catch((e) => {
    throw e;
});
process.on('uncaughtException', (err) => {
    console.log(err, err.stack);
    process.exit(1);
});
//# sourceMappingURL=index.js.map