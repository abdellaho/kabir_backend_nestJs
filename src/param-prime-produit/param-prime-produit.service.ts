import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ParamPrimeProduitService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createParamPrimeProduitDto: Prisma.ParamPrimeProduitCreateInput) {
    return this.databaseService.paramPrimeProduit.create({
      data: createParamPrimeProduitDto
    });
  }

  findAll() {
    return this.databaseService.paramPrimeProduit.findMany();
  }

  findOne(id: number) {
    return this.databaseService.paramPrimeProduit.findUnique({
      where: { id: BigInt(id) }
    });
  }

  update(id: number, updateParamPrimeProduitDto: Prisma.ParamPrimeProduitUpdateInput) {
    return this.databaseService.paramPrimeProduit.update({
      where: { id: BigInt(id) },
      data: updateParamPrimeProduitDto
    });
  }

  remove(id: number) {
    return this.databaseService.paramPrimeProduit.delete({
      where: { id: BigInt(id) }
    });
  }
}
