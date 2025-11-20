import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ChequeService {

  constructor(private databaseService: DatabaseService) {}

  create(createChequeDto: Prisma.ChequeCreateInput) {
    return this.databaseService.cheque.create({
      data: createChequeDto,
    });
  }

  findAll() {
    return this.databaseService.cheque.findMany();
  }

  findOne(id: number) {
    return this.databaseService.cheque.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateChequeDto: Prisma.ChequeUpdateInput) {
    return this.databaseService.cheque.update({
      where: { id: BigInt(id) },
      data: updateChequeDto,
    });
  }

  remove(id: number) {
    return this.databaseService.cheque.delete({
      where: { id: BigInt(id) },
    });
  }
}
