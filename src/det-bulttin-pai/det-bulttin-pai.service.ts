import { Injectable } from '@nestjs/common';
import { CreateDetBulttinPaiDto } from './dto/create-det-bulttin-pai.dto';
import { UpdateDetBulttinPaiDto } from './dto/update-det-bulttin-pai.dto';

@Injectable()
export class DetBulttinPaiService {
  create(createDetBulttinPaiDto: CreateDetBulttinPaiDto) {
    return 'This action adds a new detBulttinPai';
  }

  findAll() {
    return `This action returns all detBulttinPai`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detBulttinPai`;
  }

  update(id: number, updateDetBulttinPaiDto: UpdateDetBulttinPaiDto) {
    return `This action updates a #${id} detBulttinPai`;
  }

  remove(id: number) {
    return `This action removes a #${id} detBulttinPai`;
  }
}
