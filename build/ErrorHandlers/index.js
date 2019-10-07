"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const mongodb_1 = require("mongodb");
exports.errorHandlers = (err, req, res, next) => {
    console.error(err, err.stack);
    if (err instanceof express_validation_1.ValidationError) {
        res.status(err.status).send(err);
        return;
    }
    if (err instanceof mongodb_1.MongoError) {
        res.status(400).send({
            status: 400,
            statusText: 'Bad Request',
            name: err.name,
            errors: [
                {
                    code: err.code,
                    messages: [err.message],
                }
            ]
        });
        return;
    }
    res.status(err.status || 500).send(err.message || "An Error Has Occured");
};
//# sourceMappingURL=index.js.map