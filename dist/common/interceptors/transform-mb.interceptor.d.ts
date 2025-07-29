import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface ResponseMB<T> {
    data: T;
}
export declare class TransformMBInterceptor<T> implements NestInterceptor<T, ResponseMB<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseMB<T>>;
}
