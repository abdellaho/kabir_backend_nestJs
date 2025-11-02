import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VoitureService {
  
  constructor(private readonly databaseService: DatabaseService) {}

  create(voitureCreateInput: Prisma.VoitureCreateInput) {
    return this.databaseService.voiture.create({
      data: voitureCreateInput,
    });
  }

  findAll() {
    return this.databaseService.voiture.findMany();
  }

  findOne(id: number) {
    return this.databaseService.voiture.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateVoitureDto: Prisma.VoitureUpdateInput) {
    return this.databaseService.voiture.update({
      where: { id: BigInt(id) },
      data: updateVoitureDto,
    });
  }

  remove(id: number) {
    return this.databaseService.voiture.delete({
      where: { id: BigInt(id) },
    });
  }

  async checkIfExists(data: Prisma.VoitureCreateInput) {
    const { id, numVoiture } = data;


    // Base condition
    const where: Prisma.VoitureWhereInput = {
      numVoiture
    };

    // If editing an existing record → exclude its own ID
    if (id) {
      where.id = { not: id };
    }

    const exists = await this.databaseService.voiture.findFirst({ where });

    return exists !== null;
  }
}
