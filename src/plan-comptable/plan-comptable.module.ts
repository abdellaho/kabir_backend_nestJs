import { Module } from '@nestjs/common';
import { PlanComptableService } from './plan-comptable.service';
import { PlanComptableController } from './plan-comptable.controller';

@Module({
  controllers: [PlanComptableController],
  providers: [PlanComptableService],
})
export class PlanComptableModule {}
