import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbsenceService } from './absence.service';
import { Prisma } from 'prisma/generated/client'; 
import type { AbsenceSearch } from './search/absenceSearch';

@Controller('absence')
export class AbsenceController {
  constructor(private readonly absenceService: AbsenceService) {}

  @Post()
  create(@Body() createAbsenceDto: Prisma.AbsenceCreateInput) {
    return this.absenceService.create(createAbsenceDto);
  }

  @Get()
  findAll() {
    return this.absenceService.findAll();
  }

  @Post('exist')
  exist(@Body() absence: AbsenceSearch) {
    return this.absenceService.checkIfExists(absence);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.absenceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbsenceDto: Prisma.AbsenceUpdateInput) {
    return this.absenceService.update(+id, updateAbsenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.absenceService.remove(+id);
  }
}
