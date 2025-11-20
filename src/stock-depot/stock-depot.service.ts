import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class StockDepotService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createStockDepotDto: Prisma.StockDepotCreateInput) {
    return this.databaseService.stockDepot.create({
      data: createStockDepotDto,
    });
  }

  findAll() {
    return this.databaseService.stockDepot.findMany();
  }

  findOne(id: number) {
    return this.databaseService.stockDepot.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateStockDepotDto: Prisma.StockDepotUpdateInput) {
    return this.databaseService.stockDepot.update({
      where: { id: BigInt(id) },
      data: updateStockDepotDto,
    });
  }

  remove(id: number) {
    return this.databaseService.stockDepot.delete({
      where: { id: BigInt(id) },
    });
  }
}
