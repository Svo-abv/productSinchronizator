import "dotenv/config";
import express, { Router } from "express";
import * as core from 'express-serve-static-core';
//import '../models/schema.mjs'
import { Sequelize } from "sequelize";

import fs from 'fs';
import https from 'https';

import cors from 'cors'
import ErrorHandllingMiddleware from "../middleware/ErrorHandllingMiddleware.mjs";

class App {
    port: number;
    httpsPort: number;
    a: core.Express;
    seq: Sequelize;
    rout: Router;
    httpsServer: https.Server;

    constructor(_port: number, _httpsPort: number, _sequelize: Sequelize, _router: Router) {
        this.port = _port;
        this.httpsPort = _httpsPort;
        this.a = express();
        this.seq = _sequelize;
        this.rout = _router;

        var privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
        var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

        console.log(privateKey);
        var credentials = { key: privateKey, cert: certificate };
        this.httpsServer = https.createServer(credentials, this.a);

    }

    async start() {
        try {
            await this.seq.authenticate();
            await this.seq.sync();


            this.a.use(cors());
            this.a.use(express.json());
            this.a.use("/api", this.rout);

            this.a.use(ErrorHandllingMiddleware);

            this.a.get("/", (request, result) => result.status(200).json({ message: "hello toto" }));
            this.httpsServer.listen(this.httpsPort, () => console.log(`server https start at ${this.httpsPort}`))
            this.a.listen(this.port, () => console.log(`server start at ${this.port}`));

        }
        catch (e) {
            console.log(e);
        }
    }
}


export default App;
