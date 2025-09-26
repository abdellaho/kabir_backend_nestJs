import { Injectable } from '@nestjs/common';
import { CreateParamPrimeDto } from './dto/create-param-prime.dto';
import { UpdateParamPrimeDto } from './dto/update-param-prime.dto';

@Injectable()
export class ParamPrimeService {
  create(createParamPrimeDto: CreateParamPrimeDto) {
    return 'This action adds a new paramPrime';
  }

  findAll() {
    return `This action returns all paramPrime`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paramPrime`;
  }

  update(id: number, updateParamPrimeDto: UpdateParamPrimeDto) {
    return `This action updates a #${id} paramPrime`;
  }

  remove(id: number) {
    return `This action removes a #${id} paramPrime`;
  }
}
