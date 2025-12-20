import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DetLivraisonService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createDetLivraisonDto: Prisma.DetLivraisonCreateInput) {
    return this.databaseService.detLivraison.create({
      data: createDetLivraisonDto,
    });
  }

  createMany(createDetLivraisonDto: Prisma.DetLivraisonCreateManyInput[]) {
    return this.databaseService.detLivraison.createMany({
      data: createDetLivraisonDto,
      skipDuplicates: true,
    });
  }

  findAll() {
    return this.databaseService.detLivraison.findMany();
  }

  findByLivraisonId(livraisonId: number) {
    return this.databaseService.detLivraison.findMany({
      where: { livraisonId: BigInt(livraisonId) },
    });
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
