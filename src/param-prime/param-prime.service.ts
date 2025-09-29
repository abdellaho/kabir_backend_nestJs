import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ParamPrimeService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createParamPrimeDto: Prisma.ParamPrimeCreateInput) {
    return this.databaseService.paramPrime.create({
      data: createParamPrimeDto
    });
  }

  findAll() {
    return this.databaseService.paramPrime.findMany();
  }

  findOne(id: number) {
    return this.databaseService.paramPrime.findUnique({
      where: { id }
    });
  }

  update(id: number, updateParamPrimeDto: Prisma.ParamPrimeUpdateInput) {
    return this.databaseService.paramPrime.update({
      where: { id },
      data: updateParamPrimeDto
    });
  }

  remove(id: number) {
    return this.databaseService.paramPrime.delete({
      where: { id }
    });
  }
}
