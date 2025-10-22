import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PersonnelService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(personnelCreateInput: Prisma.PersonnelCreateInput) {
    return this.databaseService.personnel.create({
      data: personnelCreateInput,
    });
  }

  findAll() {
    return this.databaseService.personnel.findMany();
  }

  findOne(id: number) {
    return this.databaseService.personnel.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, personnelUpdateInput: Prisma.PersonnelUpdateInput) {
    return this.databaseService.personnel.update({
      where: { id: BigInt(id) },
      data: personnelUpdateInput,
    });
  }

  remove(id: number) {
    return this.databaseService.personnel.delete({
      where: { id: BigInt(id) },
    });
  }
}
