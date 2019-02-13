import {RouterV1, RouterV2} from "./Routers";
import {app} from "./App";
import cors from 'cors';
import {json, urlencoded} from "body-parser";
import {errorHandlers} from "./ErrorHandlers";

app.use(cors());
//app.use(json());
//app.use(urlencoded({extended: true}));

app.use(RouterV1);
app.use(RouterV2);

app.use(errorHandlers);
app.init();

process.on('uncaughtException', (err) => {
    console.log(123, err, err.stack);
    process.exit(1)
});

