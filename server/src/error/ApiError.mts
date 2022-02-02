class ApiError extends Error {
    status: number;
    constructor(_status: number, _message) {

        super();
        this.status = _status;
        this.message = _message;
    }

    static badRequest(message: string) {
        return new ApiError(404, message);
    }
    static noneSetFields() {
        return new ApiError(404, "Не заданы основные поля!");
    }

    static internal(message: string) {
        return new ApiError(500, message);
    }
    static forbidden(message: string) {
        return new ApiError(403, message);
    }
}

export default ApiError;

