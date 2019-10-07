import express from '@feathersjs/express';
import {RouterV1, RouterV2} from "./Routers";
import {app} from "./App";
import cors from 'cors';
import {errorHandlers} from "./ErrorHandlers";
import {MongoConnect} from "./Services/MongoDb";

/*
 *TODO: add logger intercept for inbound and outbound traffic (winston)
 * To include, headers in, requested api, body in, transaction Id in,
 * headers out, response status out, transaction id out,
 * error logger per controller
 * unhandled exception logger
 *
* */

/*
 * TODO: AWS should restart node js on any failure/crash
* */
const mongoClient = new MongoConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// TODO: add authentication middleware (JWT)
app.use(RouterV1);
app.use(RouterV2);

app.configure(express.rest());
app.use(errorHandlers);

mongoClient.init()
    .then(() => {
        app.init();
    }).catch((e) => {
    throw e
});

process.on('uncaughtException', (err) => {
    console.log(err, err.stack);
    process.exit(1)
});

export {mongoClient};

