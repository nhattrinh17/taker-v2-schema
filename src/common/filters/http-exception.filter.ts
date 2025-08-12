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
    const response = ctx.getResponse<FastifyReply>(); // Lấy kiểu FastifyReply nếu dùng Fastify
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Internal Server Error";

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === "string") {
        message = exceptionResponse;
      } else if (
        typeof exceptionResponse === "object" &&
        exceptionResponse !== null
      ) {
        message = (exceptionResponse as any).message || message;
      }
    } else {
      // Fallback: try to extract status and message directly
      const anyException = exception as any;
      if (anyException.status && typeof anyException.status === "number") {
        status = anyException.status;
      }
      if (anyException.message) {
        message = anyException.message;
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
      // Sử dụng status() thay vì code() cho Fastify
      response.status(status).send(errorResponse);
    } catch (error) {
      // Fallback với code() nếu status() không work
      response.code(status).send(errorResponse);
    }
  }
}
