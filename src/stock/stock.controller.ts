import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockService } from './stock.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  create(@Body() createStockDto: Prisma.StockCreateInput) {
    return this.stockService.create(createStockDto);
  }

  @Post('exist')
  exist(@Body() stock: Prisma.StockCreateInput) {
    return this.stockService.checkIfExists(stock);
  }

  @Post('search')
  search(@Body() stock: Prisma.StockCreateInput) {
    return this.stockService.search(stock);
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDto: Prisma.StockUpdateInput) {
    return this.stockService.update(+id, updateStockDto);
  }

  @Patch(':id/update-qte-stock')
  updateQteStock(@Param('id') id: string, @Body() { qte, typeOperation }: { qte: number; typeOperation: number }) {
    return this.stockService.updateQteStock(+id, qte, typeOperation);
  }

  @Patch(':id/update-qte-stock-import')
  updateQteStockImport(@Param('id') id: string, @Body() { qte, typeOperation }: { qte: number; typeOperation: number }) {
    return this.stockService.updateQteStockImport(+id, qte, typeOperation);
  }

  @Patch(':id/update-qte-stock-facturer')
  updateQteStockFacturer(@Param('id') id: string, @Body() { qte, typeOperation }: { qte: number; typeOperation: number }) {
    return this.stockService.updateQteStockFacturer(+id, qte, typeOperation);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(+id);
  }
}
