"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlers = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("whoopsy");
};
//# sourceMappingURL=index.js.map