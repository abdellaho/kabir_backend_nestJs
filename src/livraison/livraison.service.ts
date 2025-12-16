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

  async getLastNumeroLivraison(date: Date, id: number | null): Promise<number> {
    const year = date.getFullYear();
    const startOfYear = new Date(`${year}-01-01T00:00:00.000Z`);
    const endOfYear = new Date(`${year}-12-31T23:59:59.999Z`);

    // Build where clause conditionally
    const whereClause: any = {
      dateBl: {
        gte: startOfYear,
        lte: endOfYear,
      },
    };

    if (id && id !== null) {
      whereClause.id = BigInt(id);
    }

    const lastLivraison = await this.databaseService.livraison.findFirst({
      where: whereClause,
      orderBy: { numLivraison: 'desc' },
    });

    return lastLivraison?.numLivraison ?? 1;
  }
}
