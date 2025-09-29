import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailBonSortieService } from './detail-bon-sortie.service';
import { CreateDetailBonSortieDto } from './dto/create-detail-bon-sortie.dto';
import { UpdateDetailBonSortieDto } from './dto/update-detail-bon-sortie.dto';

@Controller('detail-bon-sortie')
export class DetailBonSortieController {
  constructor(private readonly detailBonSortieService: DetailBonSortieService) {}

  @Post()
  create(@Body() createDetailBonSortieDto: CreateDetailBonSortieDto) {
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
  update(@Param('id') id: string, @Body() updateDetailBonSortieDto: UpdateDetailBonSortieDto) {
    return this.detailBonSortieService.update(+id, updateDetailBonSortieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailBonSortieService.remove(+id);
  }
}
