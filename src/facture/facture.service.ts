import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FactureService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createFactureDto: Prisma.FactureCreateInput) {
    return this.databaseService.facture.create({
      data: createFactureDto,
    });
  }

  findAll() {
    return this.databaseService.facture.findMany();
  }

  findOne(id: number) {
    return this.databaseService.facture.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateFactureDto: Prisma.FactureUpdateInput) {
    return this.databaseService.facture.update({
      where: { id: BigInt(id) },
      data: updateFactureDto,
    });
  }

  remove(id: number) {
    return this.databaseService.facture.delete({
      where: { id: BigInt(id) },
    });
  }
}
