import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ParamComissService {

  constructor(private readonly databaseService: DatabaseService) {}
  
  create(createParamComissDto: Prisma.ParamCommissCreateInput) {
    return this.databaseService.paramCommiss.create({
      data: createParamComissDto
    });
  }

  findAll() {
    return this.databaseService.paramCommiss.findMany();
  }

  findOne(id: number) {
    return this.databaseService.paramCommiss.findUnique({
      where: { id: BigInt(id) }
    });
  }

  update(id: number, updateParamComissDto: Prisma.ParamCommissUpdateInput) {
    return this.databaseService.paramCommiss.update({
      where: { id: BigInt(id) },
      data: updateParamComissDto
    });
  }

  remove(id: number) {
    return this.databaseService.paramCommiss.delete({
      where: { id: BigInt(id) }
    });
  }
}
