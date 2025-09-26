import { Module } from '@nestjs/common';
import { ParamPrimeService } from './param-prime.service';
import { ParamPrimeController } from './param-prime.controller';

@Module({
  controllers: [ParamPrimeController],
  providers: [ParamPrimeService],
})
export class ParamPrimeModule {}
