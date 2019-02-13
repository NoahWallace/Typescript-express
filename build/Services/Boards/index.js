"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = require("http-errors");
exports.getBoardsArray = (forceReject) => {
    return new Promise((resolve, reject) => {
        if (forceReject) {
            reject(new http_errors_1.NotAcceptable("Pre Defined Message"));
            return;
        }
        resolve([{ title: "This is a board" }]);
    });
};
//# sourceMappingURL=index.js.map