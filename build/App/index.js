"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const feathers_1 = __importDefault(require("@feathersjs/feathers"));
const express_1 = __importDefault(require("@feathersjs/express"));
exports.app = express_1.default(feathers_1.default());
const httpPort = 4000;
const httpsPort = 443;
exports.app.init = () => {
    const server = exports.app.listen(httpPort);
    const httpsServer = http_1.default.createServer({
        key: fs_1.default.readFileSync(path_1.default.resolve('security/server.dev.key')),
        cert: fs_1.default.readFileSync(path_1.default.resolve('security/server.dev.cert'))
    }, exports.app).listen(httpsPort);
    server.on('listening', () => {
        console.log(`Listening at ${httpPort}`);
    });
    httpsServer.on('listening', () => {
        console.log(`Https Server Listening at ${httpsPort}`);
    });
};
//# sourceMappingURL=index.js.map