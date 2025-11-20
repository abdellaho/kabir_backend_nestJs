import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChequeService } from './cheque.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('cheque')
export class ChequeController {
  constructor(private readonly chequeService: ChequeService) {}

  @Post()
  create(@Body() createChequeDto: Prisma.ChequeCreateInput) {
    return this.chequeService.create(createChequeDto);
  }

  @Get()
  findAll() {
    return this.chequeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chequeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChequeDto: Prisma.ChequeUpdateInput) {
    return this.chequeService.update(+id, updateChequeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chequeService.remove(+id);
  }
}
