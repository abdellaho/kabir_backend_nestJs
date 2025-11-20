import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailBonSortieService } from './detail-bon-sortie.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('detail-bon-sortie')
export class DetailBonSortieController {
  constructor(private readonly detailBonSortieService: DetailBonSortieService) {}

  @Post()
  create(@Body() createDetailBonSortieDto: Prisma.DetailBonSortieCreateInput) {
    return this.detailBonSortieService.create(createDetailBonSortieDto);
  }

  @Get()
  findAll() {
    return this.detailBonSortieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailBonSortieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailBonSortieDto: Prisma.DetailBonSortieUpdateInput) {
    return this.detailBonSortieService.update(+id, updateDetailBonSortieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailBonSortieService.remove(+id);
  }
}
