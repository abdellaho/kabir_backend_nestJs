import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'prisma/generated/client'; 

@Injectable()
export class AchatLivraisonService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createAchatLivraisonDto: Prisma.AchatLivraisonCreateInput) {
    return this.databaseService.achatLivraison.create({
      data: createAchatLivraisonDto,
    });
  }

  findAll() {
    return this.databaseService.achatLivraison.findMany();
  }

  findOne(id: number) {
    return this.databaseService.achatLivraison.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateAchatLivraisonDto: Prisma.AchatLivraisonUpdateInput) {
    return this.databaseService.achatLivraison.update({
      where: { id: BigInt(id) },
      data: updateAchatLivraisonDto,
    });
  }

  remove(id: number) {
    return this.databaseService.achatLivraison.delete({
      where: { id: BigInt(id) },
    });
  }
}
