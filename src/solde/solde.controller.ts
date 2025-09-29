import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoldeService } from './solde.service';
import { CreateSoldeDto } from './dto/create-solde.dto';
import { UpdateSoldeDto } from './dto/update-solde.dto';

@Controller('solde')
export class SoldeController {
  constructor(private readonly soldeService: SoldeService) {}

  @Post()
  create(@Body() createSoldeDto: CreateSoldeDto) {
    return this.soldeService.create(createSoldeDto);
  }

  @Get()
  findAll() {
    return this.soldeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoldeDto: UpdateSoldeDto) {
    return this.soldeService.update(+id, updateSoldeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldeService.remove(+id);
  }
}
