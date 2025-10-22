import { Module } from '@nestjs/common';
import { VoitureService } from './voiture.service';
import { VoitureController } from './voiture.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [VoitureController],
  providers: [VoitureService],
})
export class VoitureModule {}
