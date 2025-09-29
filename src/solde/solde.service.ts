import { Injectable } from '@nestjs/common';
import { CreateSoldeDto } from './dto/create-solde.dto';
import { UpdateSoldeDto } from './dto/update-solde.dto';

@Injectable()
export class SoldeService {
  create(createSoldeDto: CreateSoldeDto) {
    return 'This action adds a new solde';
  }

  findAll() {
    return `This action returns all solde`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solde`;
  }

  update(id: number, updateSoldeDto: UpdateSoldeDto) {
    return `This action updates a #${id} solde`;
  }

  remove(id: number) {
    return `This action removes a #${id} solde`;
  }
}
