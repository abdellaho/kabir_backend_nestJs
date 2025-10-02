import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';
import * as paysSearch from 'src/common/searchModels/pays-search';

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

  findByName(paysSearch: paysSearch.PaysSearch) {
    let whereClause = paysSearch.id 
    ? { id: { not: paysSearch.id } } 
    : {};

    return this.databaseService.pays.findMany({
      where: {
        pays: { equals: paysSearch.pays },
        ...(whereClause)
      }, 
      take: 1
    });
  }

  async existsByName(paysSearch: paysSearch.PaysSearch): Promise<boolean> {
    let whereClause = paysSearch.id 
    ? { id: { not: paysSearch.id } } 
    : {};

    const result = await this.databaseService.pays.findMany({
      where: {
        pays: { equals: paysSearch.pays },
        ...(whereClause)
      }, 
      take: 1
    });

    return result.length > 0;
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
