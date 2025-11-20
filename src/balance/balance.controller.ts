import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Post()
  create(@Body() createBalanceDto: Prisma.BalanceCreateInput) {
    return this.balanceService.create(createBalanceDto);
  }

  @Get()
  findAll() {
    return this.balanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.balanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBalanceDto: Prisma.BalanceUpdateInput) {
    return this.balanceService.update(+id, updateBalanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.balanceService.remove(+id);
  }
}
