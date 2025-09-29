import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VilleService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createVilleDto: Prisma.VilleCreateInput) {
    return this.databaseService.ville.create({
      data: createVilleDto
    });
  }

  findAll() {
    return this.databaseService.ville.findMany();
  }

  findByName(nomVille: string) {
    return this.databaseService.ville.findMany({
      where: { nomVille: {
        contains: nomVille
      } }
    });
  }

  findOne(id: number) {
    return this.databaseService.ville.findUnique({
      where: { id: BigInt(id) }
    });
  }

  update(id: number, updateVilleDto: Prisma.VilleUpdateInput) {
    return this.databaseService.ville.update({
      where: { id: BigInt(id) },
      data: updateVilleDto
    });
  }

  remove(id: number) {
    return this.databaseService.ville.delete({
      where: { id: BigInt(id) }
    });
  }
}
