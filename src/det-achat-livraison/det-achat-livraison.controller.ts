import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetAchatLivraisonService } from './det-achat-livraison.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('det-achat-livraison')
export class DetAchatLivraisonController {
  
  constructor(private readonly detAchatLivraisonService: DetAchatLivraisonService) {}

  @Post()
  create(@Body() createDetAchatLivraisonDto: Prisma.DetAchatLivraisonCreateInput) {
    return this.detAchatLivraisonService.create(createDetAchatLivraisonDto);
  }

  @Get()
  findAll() {
    return this.detAchatLivraisonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detAchatLivraisonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetAchatLivraisonDto: Prisma.DetAchatLivraisonUpdateInput) {
    return this.detAchatLivraisonService.update(+id, updateDetAchatLivraisonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detAchatLivraisonService.remove(+id);
  }
}
