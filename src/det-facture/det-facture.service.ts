import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DetFactureService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createDetFactureDto: Prisma.DetFactureCreateInput) {
    return this.databaseService.detFacture.create({
      data: createDetFactureDto,
    });
  }

  findAll() {
    return this.databaseService.detFacture.findMany();
  }

  findOne(id: number) {
    return this.databaseService.detFacture.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateDetFactureDto: Prisma.DetFactureUpdateInput) {
    return this.databaseService.detFacture.update({
      where: { id: BigInt(id) },
      data: updateDetFactureDto,
    });
  }

  remove(id: number) {
    return this.databaseService.detFacture.delete({
      where: { id: BigInt(id) },
    });
  }
}
