import { ValidationError } from "express-validator";
import { CustomError } from "./customerror";

export class RequestValidationError extends CustomError {
    statusCode = 400;
    constructor(public errors:ValidationError[] ){
        super("Incorrect Request Parameters.");

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors(){
        return this.errors.map( error => {
            return { message: error.msg, field: error.type === 'field'?error.path:'null'};
        })
    }
}
