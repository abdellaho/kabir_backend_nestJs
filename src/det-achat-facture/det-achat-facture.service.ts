import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DetAchatFactureService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createDetAchatFactureDto: Prisma.DetAchatFactureCreateInput) {
    return this.databaseService.detAchatFacture.create({
      data: createDetAchatFactureDto,
    });
  }

  findAll() {
    return this.databaseService.detAchatFacture.findMany();
  }

  findOne(id: number) {
    return this.databaseService.detAchatFacture.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateDetAchatFactureDto: Prisma.DetAchatFactureUpdateInput) {
    return this.databaseService.detAchatFacture.update({
      where: { id: BigInt(id) },
      data: updateDetAchatFactureDto,
    });
  }

  remove(id: number) {
    return this.databaseService.detAchatFacture.delete({
      where: { id: BigInt(id) },
    });
  }
}
