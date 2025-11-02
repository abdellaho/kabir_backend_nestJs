import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
} from '@nestjs/common';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorLoggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger(ErrorLoggerInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      catchError((error) => {
        this.logger.error(
          `Unhandled Error: ${error.message}`,
          error.stack,
        );
        return throwError(() => error);
      }),
    );
  }
}
