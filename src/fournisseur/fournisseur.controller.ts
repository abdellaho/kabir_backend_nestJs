import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('fournisseur')
export class FournisseurController {
  constructor(private readonly fournisseurService: FournisseurService) {}
  
  @Post()
  create(@Body() createFactureDto: Prisma.FournisseurCreateInput) {
    return this.fournisseurService.create(createFactureDto);
  }

  @Get()
  findAll() {
    return this.fournisseurService.findAll();
  }

  @Post('exist')
  exist(@Body() fournisseur: Prisma.FournisseurCreateInput) {
    return this.fournisseurService.checkIfExists(fournisseur);
  }

  @Post('search')
  search(@Body() fournisseur: Prisma.FournisseurCreateInput) {
    return this.fournisseurService.search(fournisseur);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fournisseurService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactureDto: Prisma.FournisseurUpdateInput) {
    return this.fournisseurService.update(+id, updateFactureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fournisseurService.remove(+id);
  }
}
