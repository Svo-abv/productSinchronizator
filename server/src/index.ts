import "dotenv/config";
import express from "express";

import sequelize from "./db.mjs";
import './models/schema.mjs'


const PORT = process.env.APP_PORT || 5000;

const app = express();

const start = async () => {
  try {

    await sequelize.authenticate();
    await sequelize.sync();

    app.get("/", (request, result) => result.send("Hello, world!"));

    app.listen(PORT, () => console.log(`server start at ${PORT}`));

  }
  catch (e) {

    console.log(e);
  }
}

start();
