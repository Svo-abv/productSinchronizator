import "dotenv/config";
import express, { Router } from "express";
import * as core from 'express-serve-static-core';
//import '../models/schema.mjs'
import { Sequelize } from "sequelize";
import cors from 'cors'
import ErrorHandllingMiddleware from "../middleware/ErrorHandllingMiddleware.mjs";

class App {
    port: number;
    a: core.Express;
    seq: Sequelize;
    rout: Router;

    constructor(_port: number, _sequelize: Sequelize, _router: Router) {
        this.port = _port;
        this.a = express();
        this.seq = _sequelize;
        this.rout = _router;

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
            this.a.listen(this.port, () => console.log(`server start at ${this.port}`));

        }
        catch (e) {
            console.log(e);
        }
    }
}


export default App;
