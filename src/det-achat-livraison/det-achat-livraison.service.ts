import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DetAchatLivraisonService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createDetAchatLivraisonDto: Prisma.DetAchatLivraisonCreateInput) {
    return this.databaseService.detAchatLivraison.create({
      data: createDetAchatLivraisonDto,
    });
  }

  findAll() {
    return this.databaseService.detAchatLivraison.findMany();
  }

  findOne(id: number) {
    return this.databaseService.detAchatLivraison.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateDetAchatLivraisonDto: Prisma.DetAchatLivraisonUpdateInput) {
    return this.databaseService.detAchatLivraison.update({
      where: { id: BigInt(id) },
      data: updateDetAchatLivraisonDto,
    });
  }

  remove(id: number) {
    return this.databaseService.detAchatLivraison.delete({
      where: { id: BigInt(id) },
    });
  }
}
