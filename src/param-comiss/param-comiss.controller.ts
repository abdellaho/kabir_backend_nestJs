import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParamComissService } from './param-comiss.service';
import { Prisma } from 'generated/prisma';

@Controller('param-comiss')
export class ParamComissController {
  constructor(private readonly paramComissService: ParamComissService) {}

  @Post()
  create(@Body() createParamComissDto: Prisma.ParamCommissCreateInput) {
    return this.paramComissService.create(createParamComissDto);
  }

  @Get()
  findAll() {
    return this.paramComissService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paramComissService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParamComissDto: Prisma.ParamCommissUpdateInput) {
    return this.paramComissService.update(+id, updateParamComissDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paramComissService.remove(+id);
  }
}
