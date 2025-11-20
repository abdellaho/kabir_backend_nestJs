import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DroitService } from './droit.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('droit')
export class DroitController {
  constructor(private readonly droitService: DroitService) {}

  @Post()
  create(@Body() createDroitDto: Prisma.DroitCreateInput) {
    return this.droitService.create(createDroitDto);
  }

  @Get()
  findAll() {
    return this.droitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.droitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDroitDto: Prisma.DroitUpdateInput) {
    return this.droitService.update(+id, updateDroitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.droitService.remove(+id);
  }
}
