/**
 * @exports
 * @extends Error
 */
class EntityNotFoundError extends Error {
    /**
     * @constructor
     * @param {object} message
     */
    value: string;

    param: string;

    status: number;

    constructor(message: string, status: number, value?: string, param?: string) {
        super();
        this.status = status;
        this.message = message;
        this.name = 'E_MISSING_OR_INVALID_PARAMS';
        this.value = value;
        this.param = param;
    }
}

export default EntityNotFoundError;
