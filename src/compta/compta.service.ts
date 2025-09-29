import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ComptaService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createComptaDto: Prisma.ComptaCreateInput) {
    return this.databaseService.compta.create({
      data: createComptaDto,
    });
  }

  findAll() {
    return this.databaseService.compta.findMany();
  }

  findOne(id: number) {
    return this.databaseService.compta.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateComptaDto: Prisma.ComptaUpdateInput) {
    return this.databaseService.compta.update({
      where: { id: BigInt(id) },
      data: updateComptaDto,
    });
  }

  remove(id: number) {
    return this.databaseService.compta.delete({
      where: { id: BigInt(id) },
    });
  }
}
