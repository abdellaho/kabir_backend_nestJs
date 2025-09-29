import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ImportationsService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createImportationDto: Prisma.ImportationsCreateInput) {
    return this.databaseService.importations.create({
      data: createImportationDto,
    });
  }

  findAll() {
    return this.databaseService.importations.findMany();
  }

  findOne(id: number) {
    return this.databaseService.importations.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateImportationDto: Prisma.ImportationsUpdateInput) {
    return this.databaseService.importations.update({
      where: { id: BigInt(id) },
      data: updateImportationDto,
    });
  }

  remove(id: number) {
    return this.databaseService.importations.delete({
      where: { id: BigInt(id) },
    });
  }
}
