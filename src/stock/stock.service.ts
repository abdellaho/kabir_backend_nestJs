import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
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
  
  async updateQteStock(id: number, quantity: number, typeOperation: number) {
    const stockId = BigInt(id);
    
    if (![1, 2].includes(typeOperation)) {
      throw new Error(`Invalid operation type: ${typeOperation}`);
    }

    const qteChange = typeOperation === 1 ? -quantity : quantity;

    try {
      const updatedStock = await this.databaseService.stock.update({
        where: { id: stockId },
        data: {
          qteStock: {
            increment: qteChange
          }
        }
      });

      console.log(
        'Updated Stock:',
        'New Quantity:', updatedStock.qteStock,
        'Change:', qteChange,
        'Operation Type:', typeOperation === 1 ? 'ADD' : 'DELETE'
      );

      return updatedStock;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error(`Stock with id ${id} not found`);
      }
      throw error;
    }
  }

  async updateQteStockFacturer(id: number, quantity: number, typeOperation: number) {
    const currentStock = await this.databaseService.stock.findUnique({
      where: { id: BigInt(id) }
    });

    if (!currentStock) {
      throw new Error(`Stock with id ${id} not found`);
    }

    let newQuantity: number;
    
    if (typeOperation === 1) { // Addition
      newQuantity = currentStock.qteFacturer - quantity;
    } else if (typeOperation === 2) { // Subtraction
      newQuantity = currentStock.qteFacturer + quantity;
      if (newQuantity < 0) {
        throw new Error(`Insufficient stock: cannot subtract ${quantity} from ${currentStock.qteFacturer}`);
      }
    } else {
      throw new Error(`Invalid operation type: ${typeOperation}`);
    }

    const updatedStock = await this.databaseService.stock.update({
      where: { id: BigInt(id) },
      data: { qteFacturer: newQuantity }
    });

    return updatedStock;
  }

  async updateQteStockImport(id: number, quantity: number, typeOperation: number) {
    const currentStock = await this.databaseService.stock.findUnique({
      where: { id: BigInt(id) }
    });

    if (!currentStock) {
      throw new Error(`Stock with id ${id} not found`);
    }

    let newQuantity: number;
    
    if (typeOperation === 1) { // Addition
      newQuantity = currentStock.qteStockImport - quantity;
    } else if (typeOperation === 2) { // Subtraction
      newQuantity = currentStock.qteStockImport + quantity;
      if (newQuantity < 0) {
        throw new Error(`Insufficient stock: cannot subtract ${quantity} from ${currentStock.qteStockImport}`);
      }
    } else {
      throw new Error(`Invalid operation type: ${typeOperation}`);
    }

    const updatedStock = await this.databaseService.stock.update({
      where: { id: BigInt(id) },
      data: { qteStockImport: newQuantity }
    });

    return updatedStock;
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

    return this.databaseService.stock.findMany({ 
      where, 
      orderBy: {
        designation: 'asc'
      }
     });
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
