import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';

@Injectable()
export class DroitService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createDroitDto: Prisma.DroitCreateInput) {
    return this.databaseService.droit.create({
      data: createDroitDto
    });
  }

  findAll() {
    return this.databaseService.droit.findMany();
  }

  findOne(id: number) {
    return this.databaseService.droit.findUnique({
      where: { id }
    });
  }

  update(id: number, updateDroitDto: Prisma.DroitUpdateInput) {
    return this.databaseService.droit.update({
      where: { id },
      data: updateDroitDto
    });
  }

  remove(id: number) {
    return this.databaseService.droit.delete({
      where: { id }
    });
  }
}
