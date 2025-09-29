import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class PaysService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createPayDto: Prisma.PaysCreateInput) {
    return this.databaseService.pays.create({
      data: createPayDto
    });
  }

  findAll() {
    return this.databaseService.pays.findMany();
  }

  findByName(pays: string) {
    return this.databaseService.pays.findMany({
      where: { pays }
    });
  }

  findOne(id: number) {
    return this.databaseService.pays.findUnique({
      where: { id: BigInt(id) }
    });
  }

  update(id: number, updatePayDto: Prisma.PaysUpdateInput) {
    return this.databaseService.pays.update({
      where: { id: BigInt(id) },
      data: updatePayDto
    });
  }

  remove(id: number) {
    return this.databaseService.pays.delete({
      where: { id: BigInt(id) }
    });
  }
}
