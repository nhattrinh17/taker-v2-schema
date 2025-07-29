import { errorReasonMb } from '@common/constants/errorResMb.constant';
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ResponseMB<T> {
  data: T;
}

@Injectable()
export class TransformMBInterceptor<T> implements NestInterceptor<T, ResponseMB<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<ResponseMB<T>> {
    return next.handle().pipe(
      map((data) => ({
        error: data?.errorReason == errorReasonMb.success,
        ...data,
      })),
    );
  }
}
