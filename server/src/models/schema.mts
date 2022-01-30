import sequelize from "../db.mjs";
import { DataTypes } from "sequelize";

const User = sequelize.define("users", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING }
});

const Cataloge = sequelize.define("products", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, },
    deleted: { type: DataTypes.BOOLEAN, },
    uuid_1c: { type: DataTypes.STRING, unique: true }
});

const Products = sequelize.define("products", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_cataloge: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING, },
    img: { type: DataTypes.STRING, },
    deleted: { type: DataTypes.BOOLEAN, },
    uuid_1c: { type: DataTypes.STRING, unique: true }
});