import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DetBulttinLivraisonService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createDetBulttinLivraisonDto: Prisma.DetBulttinLivraisonCreateInput) {
    return this.databaseService.detBulttinLivraison.create({
      data: createDetBulttinLivraisonDto,
    });
  }

  findAll() {
    return this.databaseService.detBulttinLivraison.findMany();
  }

  findOne(id: number) {
    return this.databaseService.detBulttinLivraison.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateDetBulttinLivraisonDto: Prisma.DetBulttinLivraisonUpdateInput) {
    return this.databaseService.detBulttinLivraison.update({
      where: { id: BigInt(id) },
      data: updateDetBulttinLivraisonDto,
    });
  }

  remove(id: number) {
    return this.databaseService.detBulttinLivraison.delete({
      where: { id: BigInt(id) },
    });
  }
}
