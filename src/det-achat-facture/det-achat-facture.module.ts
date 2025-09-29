import { Module } from '@nestjs/common';
import { DetAchatFactureService } from './det-achat-facture.service';
import { DetAchatFactureController } from './det-achat-facture.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DetAchatFactureController],
  providers: [DetAchatFactureService],
})
export class DetAchatFactureModule {}
