import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonSortieService } from './bon-sortie.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('bon-sortie')
export class BonSortieController {
  constructor(private readonly bonSortieService: BonSortieService) {}

  @Post()
  create(@Body() createBonSortieDto: Prisma.BonSortieCreateInput) {
    return this.bonSortieService.create(createBonSortieDto);
  }

  @Get()
  findAll() {
    return this.bonSortieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonSortieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBonSortieDto: Prisma.BonSortieUpdateInput) {
    return this.bonSortieService.update(+id, updateBonSortieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonSortieService.remove(+id);
  }
}
