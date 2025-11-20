import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParamPrimeService } from './param-prime.service';
import { Prisma } from 'prisma/generated/client'; 

@Controller('prime')
export class ParamPrimeController {
  constructor(private readonly paramPrimeService: ParamPrimeService) {}

  @Post()
  create(@Body() createParamPrimeDto: Prisma.PrimeCreateInput) {
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
  update(@Param('id') id: string, @Body() updateParamPrimeDto: Prisma.PrimeUpdateInput) {
    return this.paramPrimeService.update(+id, updateParamPrimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paramPrimeService.remove(+id);
  }
}
