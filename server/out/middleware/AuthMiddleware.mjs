import ApiError from "../error/ApiError.mjs";
import jwt from 'jsonwebtoken';
export const AuthMiddleware = (request, response, next) => {
    if (request.method === "OPTIONS") {
        next();
    }
    try {
        const token = request.headers.authorization.split(' ')[1];
        if (!token) {
            return next(ApiError.forbidden("Ошибка авторизации!"));
        }
        const decoded = jwt.verify(token, process.env.SECRET);
        request.user = decoded;
        next();
    }
    catch (e) {
        return next(ApiError.forbidden("Ошибка авторизации!"));
    }
};
