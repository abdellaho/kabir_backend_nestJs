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

  search(stock: Prisma.StockCreateInput) {
    const where: Prisma.StockWhereInput = {};

    if (stock.id) {
      where.id = BigInt(stock.id);
    }

    if (stock.designation && stock.designation.trim() !== '') {
      where.designation = stock.designation;
    }

    if (stock.supprimer !== undefined) {
      where.supprimer = stock.supprimer;
    }

    if (stock.archiver !== undefined) {
      where.archiver = stock.archiver;
    }

    return this.databaseService.stock.findMany({ where });
  }

  async checkIfExists(data: Prisma.StockCreateInput) {
    const { id, designation } = data;

    // Base condition
    const where: Prisma.StockWhereInput = {
      designation,
    };

    // If editing an existing record → exclude its own ID
    if (id) {
      where.id = { not: id };
    }

    const exists = await this.databaseService.stock.findFirst({ where });

    return exists !== null;
  }
}
