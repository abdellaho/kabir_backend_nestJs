import { Module } from '@nestjs/common';
import { DroitService } from './droit.service';
import { DroitController } from './droit.controller';

@Module({
  controllers: [DroitController],
  providers: [DroitService],
})
export class DroitModule {}
