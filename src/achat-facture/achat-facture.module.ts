import { Module } from '@nestjs/common';
import { AchatFactureService } from './achat-facture.service';
import { AchatFactureController } from './achat-facture.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AchatFactureController],
  providers: [AchatFactureService],
})
export class AchatFactureModule {}
