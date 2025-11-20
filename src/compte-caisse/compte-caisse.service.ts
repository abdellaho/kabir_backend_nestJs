import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CompteCaisseService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createCompteCaisseDto: Prisma.CompteCaisseCreateInput) {
    return this.databaseService.compteCaisse.create({
      data: createCompteCaisseDto,
    });
  }

  findAll() {
    return this.databaseService.compteCaisse.findMany();
  }

  findOne(id: number) {
    return this.databaseService.compteCaisse.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateCompteCaisseDto: Prisma.CompteCaisseUpdateInput) {
    return this.databaseService.compteCaisse.update({
      where: { id: BigInt(id) },
      data: updateCompteCaisseDto,
    });
  }

  remove(id: number) {
    return this.databaseService.compteCaisse.delete({
      where: { id: BigInt(id) },
    });
  }
}
