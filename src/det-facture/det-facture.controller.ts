import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetFactureService } from './det-facture.service';
import { Prisma } from 'generated/prisma';

@Controller('det-facture')
export class DetFactureController {
  constructor(private readonly detFactureService: DetFactureService) {}

  @Post()
  create(@Body() createDetFactureDto: Prisma.DetFactureCreateInput) {
    return this.detFactureService.create(createDetFactureDto);
  }

  @Get()
  findAll() {
    return this.detFactureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detFactureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetFactureDto: Prisma.DetFactureUpdateInput) {
    return this.detFactureService.update(+id, updateDetFactureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detFactureService.remove(+id);
  }
}
