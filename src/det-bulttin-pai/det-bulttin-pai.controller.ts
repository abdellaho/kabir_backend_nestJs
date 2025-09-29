import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetBulttinPaiService } from './det-bulttin-pai.service';
import { CreateDetBulttinPaiDto } from './dto/create-det-bulttin-pai.dto';
import { UpdateDetBulttinPaiDto } from './dto/update-det-bulttin-pai.dto';

@Controller('det-bulttin-pai')
export class DetBulttinPaiController {
  constructor(private readonly detBulttinPaiService: DetBulttinPaiService) {}

  @Post()
  create(@Body() createDetBulttinPaiDto: CreateDetBulttinPaiDto) {
    return this.detBulttinPaiService.create(createDetBulttinPaiDto);
  }

  @Get()
  findAll() {
    return this.detBulttinPaiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detBulttinPaiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetBulttinPaiDto: UpdateDetBulttinPaiDto) {
    return this.detBulttinPaiService.update(+id, updateDetBulttinPaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detBulttinPaiService.remove(+id);
  }
}
