import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParamComissService } from './param-comiss.service';
import { CreateParamComissDto } from './dto/create-param-comiss.dto';
import { UpdateParamComissDto } from './dto/update-param-comiss.dto';

@Controller('param-comiss')
export class ParamComissController {
  constructor(private readonly paramComissService: ParamComissService) {}

  @Post()
  create(@Body() createParamComissDto: CreateParamComissDto) {
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
  update(@Param('id') id: string, @Body() updateParamComissDto: UpdateParamComissDto) {
    return this.paramComissService.update(+id, updateParamComissDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paramComissService.remove(+id);
  }
}
