import { Module } from '@nestjs/common';
import { PlanComptableService } from './plan-comptable.service';
import { PlanComptableController } from './plan-comptable.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PlanComptableController],
  providers: [PlanComptableService],
})
export class PlanComptableModule {}
