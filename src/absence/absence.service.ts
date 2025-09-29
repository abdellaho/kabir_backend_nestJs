import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class AbsenceService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createAbsenceDto: Prisma.AbsenceCreateInput) {
    return 'This action adds a new absence';
  }

  findAll() {
    return this.databaseService.absence.findMany();
  }

  findOne(id: number) {
    return this.databaseService.absence.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateAbsenceDto: Prisma.AbsenceUpdateInput) {
    return this.databaseService.absence.update({
      where: { id: BigInt(id) },
      data: updateAbsenceDto,
    });
  }

  remove(id: number) {
    return this.databaseService.absence.delete({
      where: { id: BigInt(id) },
    });
  }
}
