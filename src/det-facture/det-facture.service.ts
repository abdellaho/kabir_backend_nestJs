import { Injectable } from '@nestjs/common';
import { CreateDetFactureDto } from './dto/create-det-facture.dto';
import { UpdateDetFactureDto } from './dto/update-det-facture.dto';

@Injectable()
export class DetFactureService {
  create(createDetFactureDto: CreateDetFactureDto) {
    return 'This action adds a new detFacture';
  }

  findAll() {
    return `This action returns all detFacture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detFacture`;
  }

  update(id: number, updateDetFactureDto: UpdateDetFactureDto) {
    return `This action updates a #${id} detFacture`;
  }

  remove(id: number) {
    return `This action removes a #${id} detFacture`;
  }
}
