import express from "express";

export const app: express.Application = express();
const port: number = 4000;

app.init = () => app.listen(port, (): void => {
    console.log(`Listening at ${port}`)
});
