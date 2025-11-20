import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'prisma/generated/client'; 

@Injectable()
export class BalanceService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createBalanceDto: Prisma.BalanceCreateInput) {
    return this.databaseService.balance.create({
      data: createBalanceDto,
    });
  }

  findAll() {
    return this.databaseService.balance.findMany();
  }

  findOne(id: number) {
    return this.databaseService.balance.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateBalanceDto: Prisma.BalanceUpdateInput) {
    return this.databaseService.balance.update({
      where: { id: BigInt(id) },
      data: updateBalanceDto,
    });
  }

  remove(id: number) {
    return this.databaseService.balance.delete({
      where: { id: BigInt(id) },
    });
  }
}
