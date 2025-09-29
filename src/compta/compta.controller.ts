import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComptaService } from './compta.service';
import { Prisma } from 'generated/prisma';

@Controller('compta')
export class ComptaController {
  constructor(private readonly comptaService: ComptaService) {}

  @Post()
  create(@Body() createComptaDto: Prisma.ComptaCreateInput) {
    return this.comptaService.create(createComptaDto);
  }

  @Get()
  findAll() {
    return this.comptaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comptaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComptaDto: Prisma.ComptaUpdateInput) {
    return this.comptaService.update(+id, updateComptaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comptaService.remove(+id);
  }
}
