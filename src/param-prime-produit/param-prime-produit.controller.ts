import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParamPrimeProduitService } from './param-prime-produit.service';
import { Prisma } from 'generated/prisma';

@Controller('param-prime-produit')
export class ParamPrimeProduitController {
  constructor(private readonly paramPrimeProduitService: ParamPrimeProduitService) {}

  @Post()
  create(@Body() createParamPrimeProduitDto: Prisma.ParamPrimeProduitCreateInput) {
    return this.paramPrimeProduitService.create(createParamPrimeProduitDto);
  }

  @Get()
  findAll() {
    return this.paramPrimeProduitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paramPrimeProduitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParamPrimeProduitDto: Prisma.ParamPrimeProduitUpdateInput) {
    return this.paramPrimeProduitService.update(+id, updateParamPrimeProduitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paramPrimeProduitService.remove(+id);
  }
}
