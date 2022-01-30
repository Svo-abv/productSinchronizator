import ApiError from "../error/ApiError.mjs";

const ErrorHandllingMiddleware = (error, request, response, next): void => {
    if (error instanceof ApiError) {
        return response.status(error.status).json({ message: error.message });
    }
    return response.status(500).json({ message: "Не известная ошибка!" });

}
export default ErrorHandllingMiddleware;