import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AchatLivraisonService } from './achat-livraison.service';
import { Prisma } from 'generated/prisma';

@Controller('achat-livraison')
export class AchatLivraisonController {
  constructor(private readonly achatLivraisonService: AchatLivraisonService) {}

  @Post()
  create(@Body() createAchatLivraisonDto: Prisma.AchatLivraisonCreateInput) {
    return this.achatLivraisonService.create(createAchatLivraisonDto);
  }

  @Get()
  findAll() {
    return this.achatLivraisonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.achatLivraisonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAchatLivraisonDto: Prisma.AchatLivraisonUpdateInput) {
    return this.achatLivraisonService.update(+id, updateAchatLivraisonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.achatLivraisonService.remove(+id);
  }
}
