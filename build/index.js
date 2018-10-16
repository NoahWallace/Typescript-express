"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Routers_1 = require("./Routers");
const App_1 = require("./App");
const ErrorHandlers_1 = require("./ErrorHandlers");
App_1.app.use(Routers_1.RouterV1);
App_1.app.use(Routers_1.RouterV2);
App_1.app.use(ErrorHandlers_1.errorHandlers);
App_1.app.init();
process.on('uncaughtException', (err) => {
    console.log(err, err.stack);
    process.exit(1);
});
//# sourceMappingURL=index.js.map