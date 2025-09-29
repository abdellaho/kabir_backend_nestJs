import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetLivraisonService } from './det-livraison.service';
import { Prisma } from 'generated/prisma';

@Controller('det-livraison')
export class DetLivraisonController {
  constructor(private readonly detLivraisonService: DetLivraisonService) {}

  @Post()
  create(@Body() createDetLivraisonDto: Prisma.DetLivraisonCreateInput) {
    return this.detLivraisonService.create(createDetLivraisonDto);
  }

  @Get()
  findAll() {
    return this.detLivraisonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detLivraisonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetLivraisonDto: Prisma.DetLivraisonUpdateInput) {
    return this.detLivraisonService.update(+id, updateDetLivraisonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detLivraisonService.remove(+id);
  }
}
