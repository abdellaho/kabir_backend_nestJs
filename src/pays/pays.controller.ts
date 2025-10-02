import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaysService } from './pays.service';
import { Prisma } from 'generated/prisma';
import * as paysSearch from 'src/common/searchModels/pays-search';

@Controller('api/pays')
export class PaysController {
  constructor(private readonly paysService: PaysService) {}

  @Post()
  create(@Body() createPayDto: Prisma.PaysCreateInput) {
    return this.paysService.create(createPayDto);
  }

  @Get()
  findAll() {
    return this.paysService.findAll();
  }

  @Post('search')
  findByName(@Body() pays: paysSearch.PaysSearch) {
    return this.paysService.findByName(pays);
  }

  @Post('exist')
  exist(@Body() pays: paysSearch.PaysSearch) {
    return this.paysService.existsByName(pays);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayDto: Prisma.PaysUpdateInput) {
    return this.paysService.update(+id, updatePayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paysService.remove(+id);
  }
}
