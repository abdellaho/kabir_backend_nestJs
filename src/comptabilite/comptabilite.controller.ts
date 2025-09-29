import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComptabiliteService } from './comptabilite.service';
import { Prisma } from 'generated/prisma';

@Controller('comptabilite')
export class ComptabiliteController {
  constructor(private readonly comptabiliteService: ComptabiliteService) {}

  @Post()
  create(@Body() createComptabiliteDto: Prisma.ComptabiliteCreateInput) {
    return this.comptabiliteService.create(createComptabiliteDto);
  }

  @Get()
  findAll() {
    return this.comptabiliteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comptabiliteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComptabiliteDto: Prisma.ComptabiliteUpdateInput) {
    return this.comptabiliteService.update(+id, updateComptabiliteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comptabiliteService.remove(+id);
  }
}
