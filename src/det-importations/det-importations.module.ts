import { Module } from '@nestjs/common';
import { DetImportationsService } from './det-importations.service';
import { DetImportationsController } from './det-importations.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DetImportationsController],
  providers: [DetImportationsService],
})
export class DetImportationsModule {}
