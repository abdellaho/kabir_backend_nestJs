import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaysService } from './pays.service';
import { Prisma } from 'generated/prisma';

@Controller('pays')
export class PaysController {
  constructor(private readonly paysService: PaysService) {}

  @Post()
  create(@Body() createPayDto: Prisma.PaysCreateInput) {
    return this.paysService.create(createPayDto);
  }

  @Get()
  findAll() {
    return this.paysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayDto: Prisma.PaysUpdateInput) {
    return this.paysService.update(+id, updatePayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paysService.remove(+id);
  }
}
