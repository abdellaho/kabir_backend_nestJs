import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SoldeService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createSoldeDto: Prisma.SoldeCreateInput) {
    return this.databaseService.solde.create({
      data: createSoldeDto,
    });
  }

  findAll() {
    return this.databaseService.solde.findMany();
  }

  findOne(id: number) {
    return this.databaseService.solde.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateSoldeDto: Prisma.SoldeUpdateInput) {
    return this.databaseService.solde.update({
      where: { id: BigInt(id) },
      data: updateSoldeDto,
    });
  }

  remove(id: number) {
    return this.databaseService.solde.delete({
      where: { id: BigInt(id) },
    });
  }
}
