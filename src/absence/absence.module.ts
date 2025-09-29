import { Module } from '@nestjs/common';
import { AbsenceService } from './absence.service';
import { AbsenceController } from './absence.controller';
import { DatabaseModule } from './../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AbsenceController],
  providers: [AbsenceService],
})
export class AbsenceModule {}
