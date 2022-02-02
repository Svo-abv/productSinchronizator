class ApiError extends Error {
    constructor(_status, _message) {
        super();
        this.status = _status;
        this.message = _message;
    }
    static badRequest(message) {
        return new ApiError(404, message);
    }
    static noneSetFields() {
        return new ApiError(404, "Не заданы основные поля!");
    }
    static internal(message) {
        return new ApiError(500, message);
    }
    static forbidden(message) {
        return new ApiError(403, message);
    }
}
export default ApiError;
