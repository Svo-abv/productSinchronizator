import ApiError from "../error/ApiError.mjs";
import jwt from 'jsonwebtoken';
export const CheckRole = function (role) {
    return function (request, response, next) {
        if (request.method === "OPTIONS") {
            next();
        }
        try {
            const token = request.headers.authorization.split(' ')[1];
            if (!token) {
                return next(ApiError.forbidden("Ошибка авторизации!"));
            }
            const decoded = jwt.verify(token, process.env.SECRET);
            if (decoded.role !== role) {
                return next(ApiError.forbidden("Ошибка прав доступа!"));
            }
            next();
        }
        catch (e) {
            return next(ApiError.forbidden("Ошибка авторизации!"));
        }
    };
};
