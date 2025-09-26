import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParamPrimeProduitService } from './param-prime-produit.service';
import { CreateParamPrimeProduitDto } from './dto/create-param-prime-produit.dto';
import { UpdateParamPrimeProduitDto } from './dto/update-param-prime-produit.dto';

@Controller('param-prime-produit')
export class ParamPrimeProduitController {
  constructor(private readonly paramPrimeProduitService: ParamPrimeProduitService) {}

  @Post()
  create(@Body() createParamPrimeProduitDto: CreateParamPrimeProduitDto) {
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
  update(@Param('id') id: string, @Body() updateParamPrimeProduitDto: UpdateParamPrimeProduitDto) {
    return this.paramPrimeProduitService.update(+id, updateParamPrimeProduitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paramPrimeProduitService.remove(+id);
  }
}
