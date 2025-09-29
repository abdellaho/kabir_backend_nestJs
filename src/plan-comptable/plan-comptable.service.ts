import { Injectable } from '@nestjs/common';
import { CreatePlanComptableDto } from './dto/create-plan-comptable.dto';
import { UpdatePlanComptableDto } from './dto/update-plan-comptable.dto';

@Injectable()
export class PlanComptableService {
  create(createPlanComptableDto: CreatePlanComptableDto) {
    return 'This action adds a new planComptable';
  }

  findAll() {
    return `This action returns all planComptable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planComptable`;
  }

  update(id: number, updatePlanComptableDto: UpdatePlanComptableDto) {
    return `This action updates a #${id} planComptable`;
  }

  remove(id: number) {
    return `This action removes a #${id} planComptable`;
  }
}
