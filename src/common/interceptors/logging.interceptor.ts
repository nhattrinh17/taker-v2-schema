import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const { method, url, ip } = req; // Lấy IP
    const now = Date.now();

    // Log ngay khi request đến
    Logger.log(
      `Incoming request from ${ip} - ${method} ${url}`,
      context.getClass().name,
    );

    // Vẫn log sau khi xử lý xong nếu cần
    return next.handle().pipe(
      tap(() =>
        Logger.log(
          `${method} ${url} handled in ${Date.now() - now}ms`,
          context.getClass().name,
        ),
      ),
    );
  }
}
