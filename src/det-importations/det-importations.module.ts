import { Module } from '@nestjs/common';
import { DetImportationsService } from './det-importations.service';
import { DetImportationsController } from './det-importations.controller';

@Module({
  controllers: [DetImportationsController],
  providers: [DetImportationsService],
})
export class DetImportationsModule {}
