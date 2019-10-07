import fs from 'fs';
import https from 'http';
import path from 'path';

import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
// ://docs.feathersjs.com/api/express.html#app-listen-port
export const app: express.Application = express(feathers());

const httpPort: number = 4000;
const httpsPort: number = 443;

app.init = () => {
    const server = app.listen(httpPort);
    // TODO: set Seperate prod and dev paths (not files saved in repo)
    const httpsServer = https.createServer({
        key: fs.readFileSync(path.resolve('security/server.dev.key')),
        cert: fs.readFileSync(path.resolve('security/server.dev.cert'))
    } as any, app).listen(httpsPort);

    server.on('listening', (): void => {
        console.log(`Listening at ${httpPort}`)
    })
    httpsServer.on('listening', (): void => {
        console.log(`Https Server Listening at ${httpsPort}`)
    })
};
