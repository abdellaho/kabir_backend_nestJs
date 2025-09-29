import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ComptabiliteService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createComptabiliteDto: Prisma.ComptabiliteCreateInput) {
    return this.databaseService.comptabilite.create({
      data: createComptabiliteDto,
    });
  }

  findAll() {
    return this.databaseService.comptabilite.findMany();
  }

  findOne(id: number) {
    return this.databaseService.comptabilite.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateComptabiliteDto: Prisma.ComptabiliteUpdateInput) {
    return this.databaseService.comptabilite.update({
      where: { id: BigInt(id) },
      data: updateComptabiliteDto,
    });
  }

  remove(id: number) {
    return this.databaseService.comptabilite.delete({
      where: { id: BigInt(id) },
    });
  }
}
