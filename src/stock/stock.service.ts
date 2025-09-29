import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class StockService {

  constructor(private readonly databaseService: DatabaseService) {}
  

  create(createStockDto: Prisma.StockCreateInput) {
    return this.databaseService.stock.create({
      data: createStockDto
    });
  }

  findAll() {
    return this.databaseService.stock.findMany();
  }

  findOne(id: number) {
    return this.databaseService.stock.findUnique({
      where: { id: BigInt(id) }
    });
  }

  update(id: number, updateStockDto: Prisma.StockUpdateInput) {
    return this.databaseService.stock.update({
      where: { id: BigInt(id) },
      data: updateStockDto
    });
  }

  remove(id: number) {
    return this.databaseService.stock.delete({
      where: { id: BigInt(id) }
    });
  }
}
