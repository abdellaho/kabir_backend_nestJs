import { Module } from '@nestjs/common';
import { DetBulttinPaiService } from './det-bulttin-pai.service';
import { DetBulttinPaiController } from './det-bulttin-pai.controller';

@Module({
  controllers: [DetBulttinPaiController],
  providers: [DetBulttinPaiService],
})
export class DetBulttinPaiModule {}
