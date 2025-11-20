import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaisseService } from './caisse.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('caisse')
export class CaisseController {
  constructor(private readonly caisseService: CaisseService) {}

  @Post()
  create(@Body() createCaisseDto: Prisma.CaisseCreateInput) {
    return this.caisseService.create(createCaisseDto);
  }

  @Get()
  findAll() {
    return this.caisseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caisseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaisseDto: Prisma.CaisseUpdateInput) {
    return this.caisseService.update(+id, updateCaisseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caisseService.remove(+id);
  }
}
