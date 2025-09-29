import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoldeService } from './solde.service';
import { Prisma } from 'generated/prisma';

@Controller('solde')
export class SoldeController {
  constructor(private readonly soldeService: SoldeService) {}

  @Post()
  create(@Body() createSoldeDto: Prisma.SoldeCreateInput) {
    return this.soldeService.create(createSoldeDto);
  }

  @Get()
  findAll() {
    return this.soldeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoldeDto: Prisma.SoldeUpdateInput) {
    return this.soldeService.update(+id, updateSoldeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldeService.remove(+id);
  }
}
