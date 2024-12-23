import { CustomError } from "./customerror";

export class DatabaseConnectionError extends CustomError {
    statusCode=500;
    reason = "Error connecting to databaser";
    constructor(){
        super("Error Connecting to DB...");
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors(){
        return [
            {message : this.reason}
        ]
    }
}