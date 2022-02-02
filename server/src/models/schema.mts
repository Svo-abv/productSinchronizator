import sequelize from "../modules/db.mjs";
import { DataTypes, Model, Optional } from "sequelize";


export interface IUserAttributes {
    id: number;
    name: string;
    password: string;
    role: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface IUserCreationAttributes extends Optional<IUserAttributes, 'id'> { }

interface IUserInstance extends Model<IUserAttributes, IUserCreationAttributes>,
    IUserAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export const User = sequelize.define<IUserInstance>("users", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
});

export const UserBrands = sequelize.define("User_brands", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

export const Cataloge = sequelize.define("cataloge", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, },
    deleted: { type: DataTypes.BOOLEAN, },
    uuid_1c: { type: DataTypes.STRING, unique: true }
});

export const Brand = sequelize.define("brand", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, },
    deleted: { type: DataTypes.BOOLEAN, },
    uuid_1c: { type: DataTypes.STRING, unique: true }
});

export const Products = sequelize.define("products", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: DataTypes.STRING, },
    name: { type: DataTypes.STRING, },
    img: { type: DataTypes.STRING, },
    deleted: { type: DataTypes.BOOLEAN, },
    uuid_1c: { type: DataTypes.STRING, unique: true }
});

Brand.hasOne(Products);
Cataloge.hasOne(Products);

User.hasMany(UserBrands);
Brand.hasMany(UserBrands);
