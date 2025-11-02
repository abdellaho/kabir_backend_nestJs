import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';

@Catch()
export class PrismaExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(PrismaExceptionFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    // Prisma error handling
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002':
          status = HttpStatus.CONFLICT;
          message = `Unique constraint failed on: ${exception.meta?.target}`;
          break;
        case 'P2003':
          status = HttpStatus.BAD_REQUEST;
          message = `Foreign key constraint failed on: ${exception.meta?.field_name}`;
          break;
        case 'P2025':
          status = HttpStatus.NOT_FOUND;
          message = `Record not found`;
          break;
      }
    } else if (exception instanceof Prisma.PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Prisma validation error';
    }

    // ✅ Log detailed server error
    this.logger.error(
      `${request.method} ${request.url} - ${status} - ${message}`,
      exception?.stack
    );

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}