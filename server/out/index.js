import "dotenv/config";
import App from "./modules/App.mjs";
import sequelize from "./modules/db.mjs";
import router from "./routes/index.mjs";
const a = new App(Number(process.env.APP_PORT) || 5000, sequelize, router);
a.start();
