import { body, param, ValidationChain } from "express-validator/check";

export function userValidator(method: string): ValidationChain[] {
    switch (method) {
        case "GET /users": {
            return [];
        }
        case "GET /users/:userId": {
            return [
                param("userId", "Invalid or missing ':userId'").exists().isMongoId()
            ];
        }
        case "POST /users": {
            return [
                body("email", "Invalid or missing 'email'").exists().isEmail(),
                body("password", "Invalid or missing 'password'").exists().isString(),
            ];
        }
        case "POST /users/login": {
            return [
                body("email", "Invalid or missing 'email'").exists().isEmail(),
                body("password", "Invalid or missing 'password'").exists().isString(),
            ];
        }
        case "DELETE /users/:userId": {
            return [
                param("userId", "Invalid or missing ':userId'").exists().isMongoId()
            ];
        }
    }
}