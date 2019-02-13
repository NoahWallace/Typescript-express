"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Routers_1 = require("./Routers");
const App_1 = require("./App");
const cors_1 = __importDefault(require("cors"));
const ErrorHandlers_1 = require("./ErrorHandlers");
App_1.app.use(cors_1.default());
App_1.app.use(Routers_1.RouterV1);
App_1.app.use(Routers_1.RouterV2);
App_1.app.use(ErrorHandlers_1.errorHandlers);
App_1.app.init();
process.on('uncaughtException', (err) => {
    console.log(123, err, err.stack);
    process.exit(1);
});
//# sourceMappingURL=index.js.map