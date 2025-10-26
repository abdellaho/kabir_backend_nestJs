import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PersonnelService {
  private readonly saltRounds = 10;

  constructor(private readonly databaseService: DatabaseService) {}

  async create(personnelCreateInput: Prisma.PersonnelCreateInput) {
    if (personnelCreateInput.password) {
      personnelCreateInput.password = await bcrypt.hash(personnelCreateInput.password, this.saltRounds);
    }

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

  async update(id: number, personnelUpdateInput: Prisma.PersonnelUpdateInput) {
    if (personnelUpdateInput.password) {
      personnelUpdateInput.password = await bcrypt.hash(personnelUpdateInput.password as string, this.saltRounds);
    }

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
