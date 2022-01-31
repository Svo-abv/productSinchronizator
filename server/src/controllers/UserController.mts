import { createHash } from "crypto";
import ApiError from "../error/ApiError.mjs";
import { IUserAttributes, User } from "../models/schema.mjs";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


class UserController {

    async registration(request, response, next) {
        const { name, password } = request.body;
        if (!name || !password) {
            return next(ApiError.noneSetFields());
        }
        try {
            const hashPwd = await bcrypt.hash(password, 5);
            const user = await User.create({ name, password: hashPwd });
            const jwtHash = jwt.sign(
                { id: user.id, name: user.name, role: user.role },
                process.env.SECRET,
                { expiresIn: "24h" });
            return response.json({ jwtHash });
        } catch (e) {
            return next(ApiError.internal(e.message));
        }

    }
    async login(request, response, next) {
        const { name, password } = request.body;
        console.log(request.body);
        if (!name || !password) {
            return next(ApiError.noneSetFields());
        }
        try {
            const user = await User.findOne({ where: { name: name } });
            if (!user) {

                return next(ApiError.badRequest("Неврный логин!"))
            }
            const comparePwd = bcrypt.compareSync(password, user.password);
            if (!comparePwd) {
                return next(ApiError.badRequest("Неврный пароль!"))
            }
            const jwtHash = jwt.sign(
                { id: user.id, name: user.name, role: user.role },
                process.env.SECRET,
                { expiresIn: "24h" });
            return response.json({ jwtHash });
        } catch (e) {
            return next(ApiError.internal(e.message));
        }

    }
    async checkAuth(request, response, next) {
        const jwtHash = jwt.sign(
            { id: request.user.id, name: request.user.name, role: request.user.role },
            process.env.SECRET,
            { expiresIn: "24h" });
        return response.json({ jwtHash });
    }
}

export default new UserController();