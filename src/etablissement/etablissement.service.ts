import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EtablissementService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createEtablissementDto: Prisma.EtablissementCreateInput) {
    return this.databaseService.etablissement.create({
      data: createEtablissementDto
    });
  }

  findAll() {
    return this.databaseService.etablissement.findMany();
  }

  findOne(id: number) {
    return this.databaseService.etablissement.findUnique({
      where: { id }
    });
  }

  update(id: number, updateEtablissementDto: Prisma.EtablissementUpdateInput) {
    return this.databaseService.etablissement.update({
      where: { id },
      data: updateEtablissementDto
    });
  }

  remove(id: number) {
    return this.databaseService.etablissement.delete({
      where: { id }
    });
  }
}
