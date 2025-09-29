import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BonSortieService } from './bon-sortie.service';
import { CreateBonSortieDto } from './dto/create-bon-sortie.dto';
import { UpdateBonSortieDto } from './dto/update-bon-sortie.dto';

@Controller('bon-sortie')
export class BonSortieController {
  constructor(private readonly bonSortieService: BonSortieService) {}

  @Post()
  create(@Body() createBonSortieDto: CreateBonSortieDto) {
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
  update(@Param('id') id: string, @Body() updateBonSortieDto: UpdateBonSortieDto) {
    return this.bonSortieService.update(+id, updateBonSortieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonSortieService.remove(+id);
  }
}
