import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BigIntInterceptor } from './common/interceptors/bigint.interceptor';
import { PrismaExceptionFilter } from './exceptionHandlers/prisma-exception.filter';
import { AllExceptionsFilter } from './exceptionHandlers/all-exceptions.filter';
import { ErrorLoggerInterceptor } from './common/interceptors/error-logger.interceptor';
import * as dotenv from 'dotenv';


dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new AllExceptionsFilter(), new PrismaExceptionFilter());
  app.enableCors();
  app.useGlobalInterceptors(new ErrorLoggerInterceptor(), new BigIntInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
