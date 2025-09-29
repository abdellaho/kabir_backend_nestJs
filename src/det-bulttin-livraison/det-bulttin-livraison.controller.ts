import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetBulttinLivraisonService } from './det-bulttin-livraison.service';
import { Prisma } from 'generated/prisma';

@Controller('det-bulttin-livraison')
export class DetBulttinLivraisonController {
  constructor(private readonly detBulttinLivraisonService: DetBulttinLivraisonService) {}

  @Post()
  create(@Body() createDetBulttinLivraisonDto: Prisma.DetBulttinLivraisonCreateInput) {
    return this.detBulttinLivraisonService.create(createDetBulttinLivraisonDto);
  }

  @Get()
  findAll() {
    return this.detBulttinLivraisonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detBulttinLivraisonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetBulttinLivraisonDto: Prisma.DetBulttinLivraisonUpdateInput) {
    return this.detBulttinLivraisonService.update(+id, updateDetBulttinLivraisonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detBulttinLivraisonService.remove(+id);
  }
}
