import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CaisseService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createCaisseDto: Prisma.CaisseCreateInput) {
    return this.databaseService.caisse.create({
      data: createCaisseDto,
    });
  }

  findAll() {
    return this.databaseService.caisse.findMany();
  }

  findOne(id: number) {
    return this.databaseService.caisse.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateCaisseDto: Prisma.CaisseUpdateInput) {
    return this.databaseService.caisse.update({
      where: { id: BigInt(id) },
      data: updateCaisseDto,
    });
  }

  remove(id: number) {
    return this.databaseService.caisse.delete({
      where: { id: BigInt(id) },
    });
  }
}
