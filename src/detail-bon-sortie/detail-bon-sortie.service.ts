import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DetailBonSortieService {

  constructor(private readonly databaseService: DatabaseService) {}


  create(createDetailBonSortieDto: Prisma.DetailBonSortieCreateInput) {
    return this.databaseService.detailBonSortie.create({
      data: createDetailBonSortieDto
    });
  }

  findAll() {
    return this.databaseService.detailBonSortie.findMany();
  }

  findOne(id: number) {
    return this.databaseService.detailBonSortie.findUnique({
      where: { id: BigInt(id) }
    });
  }

  update(id: number, updateDetailBonSortieDto: Prisma.DetailBonSortieUpdateInput) {
    return this.databaseService.detailBonSortie.update({
      where: { id: BigInt(id) },
      data: updateDetailBonSortieDto
    });
  }

  remove(id: number) {
    return this.databaseService.detailBonSortie.delete({
      where: { id: BigInt(id) }
    });
  }
}
