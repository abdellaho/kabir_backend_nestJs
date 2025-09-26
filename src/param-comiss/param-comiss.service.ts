import { Injectable } from '@nestjs/common';
import { CreateParamComissDto } from './dto/create-param-comiss.dto';
import { UpdateParamComissDto } from './dto/update-param-comiss.dto';

@Injectable()
export class ParamComissService {
  create(createParamComissDto: CreateParamComissDto) {
    return 'This action adds a new paramComiss';
  }

  findAll() {
    return `This action returns all paramComiss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paramComiss`;
  }

  update(id: number, updateParamComissDto: UpdateParamComissDto) {
    return `This action updates a #${id} paramComiss`;
  }

  remove(id: number) {
    return `This action removes a #${id} paramComiss`;
  }
}
