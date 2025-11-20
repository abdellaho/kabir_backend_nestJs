import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompteCaisseService } from './compte-caisse.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('compte-caisse')
export class CompteCaisseController {
  constructor(private readonly compteCaisseService: CompteCaisseService) {}

  @Post()
  create(@Body() createCompteCaisseDto: Prisma.CompteCaisseCreateInput) {
    return this.compteCaisseService.create(createCompteCaisseDto);
  }

  @Get()
  findAll() {
    return this.compteCaisseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compteCaisseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompteCaisseDto: Prisma.CompteCaisseUpdateInput) {
    return this.compteCaisseService.update(+id, updateCompteCaisseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compteCaisseService.remove(+id);
  }
}
