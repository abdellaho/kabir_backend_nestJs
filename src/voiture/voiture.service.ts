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
}
