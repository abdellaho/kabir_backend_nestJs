import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AchatFactureService } from './achat-facture.service';
import { Prisma } from 'generated/prisma';

@Controller('achat-facture')
export class AchatFactureController {
  constructor(private readonly achatFactureService: AchatFactureService) {}

  @Post()
  create(@Body() createAchatFactureDto: Prisma.AchatFactureCreateInput) {
    return this.achatFactureService.create(createAchatFactureDto);
  }

  @Get()
  findAll() {
    return this.achatFactureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.achatFactureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAchatFactureDto: Prisma.AchatFactureUpdateInput) {
    return this.achatFactureService.update(+id, updateAchatFactureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.achatFactureService.remove(+id);
  }
}
