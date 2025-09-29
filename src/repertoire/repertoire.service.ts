import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RepertoireService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createRepertoireDto: Prisma.RepertoireCreateInput) {
    return this.databaseService.repertoire.create({
      data: createRepertoireDto
    });
  }

  findAll() {
    return this.databaseService.repertoire.findMany();
  }

  findOne(id: number) {
    return this.databaseService.repertoire.findUnique({
      where: { id }
    });
  }

  update(id: number, updateRepertoireDto: Prisma.RepertoireUpdateInput) {
    return this.databaseService.repertoire.update({
      where: { id },
      data: updateRepertoireDto
    });
  }

  remove(id: number) {
    return this.databaseService.repertoire.delete({
      where: { id }
    });
  }
}
