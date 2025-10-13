import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RepertoireService } from './repertoire.service';
import { Prisma } from 'generated/prisma';
import type { RepertoireSearch } from 'src/common/searchModels/repertoire-search';

@Controller('repertoire')
export class RepertoireController {
  constructor(private readonly repertoireService: RepertoireService) {}

  @Post()
  create(@Body() createRepertoireDto: Prisma.RepertoireCreateInput) {
    return this.repertoireService.create(createRepertoireDto);
  }

  @Post('search-personnel')
  searchPersonnel(@Body() repertoireSearch: RepertoireSearch) {
    return this.repertoireService.checkIfExists(repertoireSearch);
  }

  @Get()
  findAll() {
    return this.repertoireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repertoireService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepertoireDto: Prisma.RepertoireUpdateInput) {
    return this.repertoireService.update(+id, updateRepertoireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repertoireService.remove(+id);
  }
}
