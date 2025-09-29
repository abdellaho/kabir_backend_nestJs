import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BilanService } from './bilan.service';
import { Prisma } from 'generated/prisma';

@Controller('bilan')
export class BilanController {
  constructor(private readonly bilanService: BilanService) {}

  @Post()
  create(@Body() createBilanDto: Prisma.BilanCreateInput) {
    return this.bilanService.create(createBilanDto);
  }

  @Get()
  findAll() {
    return this.bilanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bilanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBilanDto: Prisma.BilanUpdateInput) {
    return this.bilanService.update(+id, updateBilanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bilanService.remove(+id);
  }
}
