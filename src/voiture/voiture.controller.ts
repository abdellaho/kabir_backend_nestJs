import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VoitureService } from './voiture.service';
import { Prisma } from 'generated/prisma';

@Controller('voiture')
export class VoitureController {
  constructor(private readonly voitureService: VoitureService) {}

  @Post()
  create(@Body() createFactureDto: Prisma.VoitureCreateInput) {
    return this.voitureService.create(createFactureDto);
  }

  @Get()
  findAll() {
    return this.voitureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.voitureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactureDto: Prisma.VoitureUpdateInput) {
    return this.voitureService.update(+id, updateFactureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.voitureService.remove(+id);
  }
}
