import { Module } from '@nestjs/common';
import { DetFactureService } from './det-facture.service';
import { DetFactureController } from './det-facture.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DetFactureController],
  providers: [DetFactureService],
})
export class DetFactureModule {}
