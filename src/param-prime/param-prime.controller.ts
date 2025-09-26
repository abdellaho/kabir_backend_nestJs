import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParamPrimeService } from './param-prime.service';
import { CreateParamPrimeDto } from './dto/create-param-prime.dto';
import { UpdateParamPrimeDto } from './dto/update-param-prime.dto';

@Controller('param-prime')
export class ParamPrimeController {
  constructor(private readonly paramPrimeService: ParamPrimeService) {}

  @Post()
  create(@Body() createParamPrimeDto: CreateParamPrimeDto) {
    return this.paramPrimeService.create(createParamPrimeDto);
  }

  @Get()
  findAll() {
    return this.paramPrimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paramPrimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParamPrimeDto: UpdateParamPrimeDto) {
    return this.paramPrimeService.update(+id, updateParamPrimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paramPrimeService.remove(+id);
  }
}
