import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockDepotService } from './stock-depot.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('stock-depot')
export class StockDepotController {
  constructor(private readonly stockDepotService: StockDepotService) {}

  @Post()
  create(@Body() createStockDepotDto: Prisma.StockDepotCreateInput) {
    return this.stockDepotService.create(createStockDepotDto);
  }

  @Get()
  findAll() {
    return this.stockDepotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockDepotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDepotDto: Prisma.StockDepotUpdateInput) {
    return this.stockDepotService.update(+id, updateStockDepotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockDepotService.remove(+id);
  }
}
