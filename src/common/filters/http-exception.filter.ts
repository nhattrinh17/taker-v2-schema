import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  HttpStatus,
} from "@nestjs/common";
import { FastifyReply } from "fastify";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: any = "Internal Server Error";
    let errors: any = null;

    // Trường hợp HttpException (BadRequest, Unauthorized, NotFound, ...)
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === "string") {
        message = exceptionResponse;
      } else if (
        typeof exceptionResponse === "object" &&
        exceptionResponse !== null
      ) {
        const res: any = exceptionResponse;
        message = res.message || message;
        if (Array.isArray(res.message)) {
          // ValidationPipe errors
          errors = res.message;
          message = errors.join(", ");
        }
      }
    } else {
      // Các loại error khác (VD: query DB, JS error, custom error)
      const anyException = exception as any;
      console.log(anyException);
      
      if (anyException.status && typeof anyException.status === "number") {
        status = anyException.status;
      }
      if (anyException.response.message) {
        message = anyException.response.message;
        if (Array.isArray(message)) {
          // ValidationPipe errors
          errors = message;
          message = errors.join(", ");
        }
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
    } catch {
      response.code(status).send(errorResponse);
    }
  }
}
