import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetFactureService } from './det-facture.service';
import { CreateDetFactureDto } from './dto/create-det-facture.dto';
import { UpdateDetFactureDto } from './dto/update-det-facture.dto';

@Controller('det-facture')
export class DetFactureController {
  constructor(private readonly detFactureService: DetFactureService) {}

  @Post()
  create(@Body() createDetFactureDto: CreateDetFactureDto) {
    return this.detFactureService.create(createDetFactureDto);
  }

  @Get()
  findAll() {
    return this.detFactureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detFactureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetFactureDto: UpdateDetFactureDto) {
    return this.detFactureService.update(+id, updateDetFactureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detFactureService.remove(+id);
  }
}
