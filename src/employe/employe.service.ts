import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'prisma/generated/client'; 

@Injectable()
export class EmployeService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createEmployeDto: Prisma.EmployeCreateInput) {
    return this.databaseService.employe.create({
      data: createEmployeDto
    });
  }

  findAll() {
    return this.databaseService.employe.findMany();
  }

  findOne(id: number) {
    return this.databaseService.employe.findUnique({
      where: { id: BigInt(id) }
    });
  }

  update(id: number, updateEmployeDto: Prisma.EmployeUpdateInput) {
    return this.databaseService.employe.update({
      where: { id: BigInt(id) },
      data: updateEmployeDto
    });
  }

  remove(id: number) {
    return this.databaseService.employe.delete({
      where: { id: BigInt(id) }
    });
  }
}
