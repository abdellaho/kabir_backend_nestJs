import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class BilanService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createBilanDto: Prisma.BilanCreateInput) {
    return this.databaseService.bilan.create({
      data: createBilanDto,
    });
  }

  findAll() {
    return this.databaseService.bilan.findMany();
  }

  findOne(id: number) {
    return this.databaseService.bilan.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateBilanDto: Prisma.BilanUpdateInput) {
    return this.databaseService.bilan.update({
      where: { id: BigInt(id) },
      data: updateBilanDto,
    });
  }

  remove(id: number) {
    return this.databaseService.bilan.delete({
      where: { id: BigInt(id) },
    });
  }
}
