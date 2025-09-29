import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class LivraisonService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createLivraisonDto: Prisma.LivraisonCreateInput) {
    return this.databaseService.livraison.create({
      data: createLivraisonDto,
    });
  }

  findAll() {
    return this.databaseService.livraison.findMany();
  }

  findOne(id: number) {
    return this.databaseService.livraison.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateLivraisonDto: Prisma.LivraisonUpdateInput) {
    return this.databaseService.livraison.update({
      where: { id: BigInt(id) },
      data: updateLivraisonDto,
    });
  }

  remove(id: number) {
    return this.databaseService.livraison.delete({
      where: { id: BigInt(id) },
    });
  }
}
