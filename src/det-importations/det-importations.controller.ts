import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetImportationsService } from './det-importations.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('det-importations')
export class DetImportationsController {
  constructor(private readonly detImportationsService: DetImportationsService) {}

  @Post()
  create(@Body() createDetImportationDto: Prisma.DetImportationsCreateInput) {
    return this.detImportationsService.create(createDetImportationDto);
  }

  @Get()
  findAll() {
    return this.detImportationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detImportationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetImportationDto: Prisma.DetImportationsUpdateInput) {
    return this.detImportationsService.update(+id, updateDetImportationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detImportationsService.remove(+id);
  }
}
