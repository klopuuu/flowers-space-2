class ApiError extends Error{
    constructor(status, message) {
        super()
        this.status = status
        this.message = message
    }
//неудачный запрос
    static badRequest(message) {
        return new ApiError(404, message)
    }
//внутренняя ошибка
    static internal(message) {
        return new ApiError(500, message)
    }
//доступа нет
    static forbidden(message) {
        return new ApiError(403, message)
    }
}

module.exports = ApiError