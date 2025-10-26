import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ParamPrimeService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createParamPrimeDto: Prisma.PrimeCreateInput) {
    return this.databaseService.prime.create({
      data: createParamPrimeDto
    });
  }

  findAll() {
    return this.databaseService.prime.findMany();
  }

  findOne(id: number) {
    return this.databaseService.prime.findUnique({
      where: { id: BigInt(id) }
    });
  }

  update(id: number, updateParamPrimeDto: Prisma.PrimeUpdateInput) {
    return this.databaseService.prime.update({
      where: { id: BigInt(id) },
      data: updateParamPrimeDto
    });
  }

  remove(id: number) {
    return this.databaseService.prime.delete({
      where: { id: BigInt(id) }
    });
  }
}
