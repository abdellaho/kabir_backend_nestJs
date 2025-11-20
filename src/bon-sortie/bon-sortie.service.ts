import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BonSortieService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createBonSortieDto: Prisma.BonSortieCreateInput) {
    return this.databaseService.bonSortie.create({
      data: createBonSortieDto,
    });
  }

  findAll() {
    return this.databaseService.bonSortie.findMany();
  }

  findOne(id: number) {
    return this.databaseService.bonSortie.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateBonSortieDto: Prisma.BonSortieUpdateInput) {
    return this.databaseService.bonSortie.update({
      where: { id: BigInt(id) },
      data: updateBonSortieDto,
    });
  }

  remove(id: number) {
    return this.databaseService.bonSortie.delete({
      where: { id: BigInt(id) },
    });
  }
}
