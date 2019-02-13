"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlers = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "An Error Has Occured");
};
//# sourceMappingURL=index.js.map