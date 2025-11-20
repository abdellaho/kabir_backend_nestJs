import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VilleService } from './ville.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('ville')
export class VilleController {
  constructor(private readonly villeService: VilleService) {}

  @Post()
  create(@Body() createVilleDto: Prisma.VilleCreateInput) {
    return this.villeService.create(createVilleDto);
  }

  @Post('exist')
  exist(@Body() ville: Prisma.VilleCreateInput) {
    return this.villeService.checkIfExists(ville);
  }

  @Get()
  findAll() {
    return this.villeService.findAll();
  }

  @Get('by-name/:nomVille')
  findByName(@Param('nomVille') nomVille: string) {
    return this.villeService.findByName(nomVille);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.villeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVilleDto: Prisma.VilleUpdateInput) {
    return this.villeService.update(+id, updateVilleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.villeService.remove(+id);
  }
}
