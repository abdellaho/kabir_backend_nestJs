import { Module } from '@nestjs/common';
import { DetFactureService } from './det-facture.service';
import { DetFactureController } from './det-facture.controller';

@Module({
  controllers: [DetFactureController],
  providers: [DetFactureService],
})
export class DetFactureModule {}
