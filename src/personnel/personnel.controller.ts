import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonnelService } from './personnel.service';
import { Prisma } from 'generated/prisma';

@Controller('personnel')
export class PersonnelController {
  constructor(private readonly personnelService: PersonnelService) {}

  @Post()
  create(@Body() createFactureDto: Prisma.PersonnelCreateInput) {
    return this.personnelService.create(createFactureDto);
  }

  @Get()
  findAll() {
    return this.personnelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personnelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactureDto: Prisma.PersonnelUpdateInput) {
    return this.personnelService.update(+id, updateFactureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personnelService.remove(+id);
  }
}
