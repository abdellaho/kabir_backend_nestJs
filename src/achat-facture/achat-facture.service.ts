import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class AchatFactureService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createAchatFactureDto: Prisma.AchatFactureCreateInput) {
    return this.databaseService.achatFacture.create({
      data: createAchatFactureDto,
    });
  }

  findAll() {
    return this.databaseService.achatFacture.findMany();
  }

  findOne(id: number) {
    return this.databaseService.achatFacture.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateAchatFactureDto: Prisma.AchatFactureUpdateInput) {
    return this.databaseService.achatFacture.update({
      where: { id: BigInt(id) },
      data: updateAchatFactureDto,
    });
  }

  remove(id: number) {
    return this.databaseService.achatFacture.delete({
      where: { id: BigInt(id) },
    });
  }
}
