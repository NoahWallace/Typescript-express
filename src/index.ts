import {RouterV1, RouterV2} from "./Routers";
import {app} from "./App";
import {errorHandlers} from "./ErrorHandlers";

app.use(RouterV1);
app.use(RouterV2);

app.use(errorHandlers);
app.init();

process.on('uncaughtException', (err) => {
    console.log(err, err.stack);
    process.exit(1)
});

