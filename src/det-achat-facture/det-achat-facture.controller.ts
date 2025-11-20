import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetAchatFactureService } from './det-achat-facture.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('det-achat-facture')
export class DetAchatFactureController {
  constructor(private readonly detAchatFactureService: DetAchatFactureService) {}

  @Post()
  create(@Body() createDetAchatFactureDto: Prisma.DetAchatFactureCreateInput) {
    return this.detAchatFactureService.create(createDetAchatFactureDto);
  }

  @Get()
  findAll() {
    return this.detAchatFactureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detAchatFactureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetAchatFactureDto: Prisma.DetAchatFactureUpdateInput) {
    return this.detAchatFactureService.update(+id, updateDetAchatFactureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detAchatFactureService.remove(+id);
  }
}
