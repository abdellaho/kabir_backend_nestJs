import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DetLivraisonService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createDetLivraisonDto: Prisma.DetLivraisonCreateInput) {
    return this.databaseService.detLivraison.create({
      data: createDetLivraisonDto,
    });
  }

  findAll() {
    return this.databaseService.detLivraison.findMany();
  }

  findOne(id: number) {
    return this.databaseService.detLivraison.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateDetLivraisonDto: Prisma.DetLivraisonUpdateInput) {
    return this.databaseService.detLivraison.update({
      where: { id: BigInt(id) },
      data: updateDetLivraisonDto,
    });
  }

  remove(id: number) {
    return this.databaseService.detLivraison.delete({
      where: { id: BigInt(id) },
    });
  }
}
