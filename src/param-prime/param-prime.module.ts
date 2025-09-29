import { Module } from '@nestjs/common';
import { ParamPrimeService } from './param-prime.service';
import { ParamPrimeController } from './param-prime.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ParamPrimeController],
  providers: [ParamPrimeService],
})
export class ParamPrimeModule {}
