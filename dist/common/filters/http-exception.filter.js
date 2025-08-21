"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = "Internal Server Error";
        let errors = null;
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const exceptionResponse = exception.getResponse();
            if (typeof exceptionResponse === "string") {
                message = exceptionResponse;
            }
            else if (typeof exceptionResponse === "object" &&
                exceptionResponse !== null) {
                const res = exceptionResponse;
                message = res.message || message;
                if (Array.isArray(res.message)) {
                    errors = res.message;
                    message = "Validation failed";
                }
            }
        }
        else {
            const anyException = exception;
            if (anyException.status && typeof anyException.status === "number") {
                status = anyException.status;
            }
            if (anyException.message) {
                message = anyException.message;
            }
            if (anyException.response) {
                errors = anyException.response;
            }
        }
        const errorResponse = {
            type: "error",
            code: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
            message,
        };
        try {
            response.status(status).send(errorResponse);
        }
        catch {
            response.code(status).send(errorResponse);
        }
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Catch)()
], HttpExceptionFilter);
