import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PlanComptableService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createPlanComptableDto: Prisma.PlanComptableCreateInput) {
    return this.databaseService.planComptable.create({
      data: createPlanComptableDto,
    });
  }

  findAll() {
    return this.databaseService.planComptable.findMany();
  }

  findOne(id: number) {
    return this.databaseService.planComptable.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updatePlanComptableDto: Prisma.PlanComptableUpdateInput) {
    return this.databaseService.planComptable.update({
      where: { id: BigInt(id) },
      data: updatePlanComptableDto,
    });
  }

  remove(id: number) {
    return this.databaseService.planComptable.delete({
      where: { id: BigInt(id) },
    });
  }
}
