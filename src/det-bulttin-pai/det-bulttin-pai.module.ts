import { Module } from '@nestjs/common';
import { DetBulttinPaiService } from './det-bulttin-pai.service';
import { DetBulttinPaiController } from './det-bulttin-pai.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DetBulttinPaiController],
  providers: [DetBulttinPaiService],
})
export class DetBulttinPaiModule {}
