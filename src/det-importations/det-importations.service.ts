import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DetImportationsService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createDetImportationDto: Prisma.DetImportationsCreateInput) {
    return this.databaseService.detImportations.create({
      data: createDetImportationDto,
    });
  }

  findAll() {
    return this.databaseService.detImportations.findMany();
  }

  findOne(id: number) {
    return this.databaseService.detImportations.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateDetImportationDto: Prisma.DetImportationsUpdateInput) {
    return this.databaseService.detImportations.update({
      where: { id: BigInt(id) },
      data: updateDetImportationDto,
    });
  }

  remove(id: number) {
    return this.databaseService.detImportations.delete({
      where: { id: BigInt(id) },
    });
  }
}
