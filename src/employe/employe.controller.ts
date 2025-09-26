import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeService } from './employe.service';
import { Prisma } from 'generated/prisma';

@Controller('employe')
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post()
  create(@Body() createEmployeDto: Prisma.EmployeCreateInput) {
    return this.employeService.create(createEmployeDto);
  }

  @Get()
  findAll() {
    return this.employeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeDto: Prisma.EmployeUpdateInput) {
    return this.employeService.update(+id, updateEmployeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeService.remove(+id);
  }
}
