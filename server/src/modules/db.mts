import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PWD,
    {
        dialect: "mysql",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT)
    }
)

export default sequelize;