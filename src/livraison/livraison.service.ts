import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
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

  getLastNumeroLivraison(date: Date, id: number) {
    const year = date.getFullYear();

    // Find the last `numLivraison` for the given year
    let lastNumeroLivraison = this.databaseService.livraison.findFirst({
      where: {
        dateBl: {
          gte: new Date(`${year}-01-01T00:00:00.000Z`),
          lte: new Date(`${year}-12-31T23:59:59.999Z`),
        },
        id: BigInt(id),
      },
      orderBy: { numLivraison: 'desc' },
    });

    if (lastNumeroLivraison && 'numLivraison' in lastNumeroLivraison) {
      return lastNumeroLivraison.numLivraison;
    } else {
      return 1;
    }
  }
}
