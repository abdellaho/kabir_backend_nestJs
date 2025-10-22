import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FournisseurService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(fournisseurCreateInput: Prisma.FournisseurCreateInput) {
    return this.databaseService.fournisseur.create({
      data: fournisseurCreateInput,
    });
  }

  findAll() {
    return this.databaseService.fournisseur.findMany();
  }

  findOne(id: number) {
    return this.databaseService.fournisseur.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, fournisseurUpdateInput: Prisma.FournisseurUpdateInput) {
    return this.databaseService.fournisseur.update({
      where: { id: BigInt(id) },
      data: fournisseurUpdateInput,
    });
  }

  remove(id: number) {
    return this.databaseService.fournisseur.delete({
      where: { id: BigInt(id) },
    });
  }
}
