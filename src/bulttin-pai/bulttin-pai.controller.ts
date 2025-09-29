import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BulttinPaiService } from './bulttin-pai.service';
import { Prisma } from 'generated/prisma';

@Controller('bulttin-pai')
export class BulttinPaiController {
  constructor(private readonly bulttinPaiService: BulttinPaiService) {}

  @Post()
  create(@Body() createBulttinPaiDto: Prisma.BulttinPaiCreateInput) {
    return this.bulttinPaiService.create(createBulttinPaiDto);
  }

  @Get()
  findAll() {
    return this.bulttinPaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bulttinPaiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBulttinPaiDto: Prisma.BulttinPaiUpdateInput) {
    return this.bulttinPaiService.update(+id, updateBulttinPaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bulttinPaiService.remove(+id);
  }
}
