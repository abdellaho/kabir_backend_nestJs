import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanComptableService } from './plan-comptable.service';
import { Prisma } from 'generated/prisma';

@Controller('plan-comptable')
export class PlanComptableController {
  constructor(private readonly planComptableService: PlanComptableService) {}

  @Post()
  create(@Body() createPlanComptableDto: Prisma.PlanComptableCreateInput) {
    return this.planComptableService.create(createPlanComptableDto);
  }

  @Get()
  findAll() {
    return this.planComptableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planComptableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanComptableDto: Prisma.PlanComptableUpdateInput) {
    return this.planComptableService.update(+id, updatePlanComptableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planComptableService.remove(+id);
  }
}
