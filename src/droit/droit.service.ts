import { Injectable } from '@nestjs/common';
import { CreateDroitDto } from './dto/create-droit.dto';
import { UpdateDroitDto } from './dto/update-droit.dto';

@Injectable()
export class DroitService {
  create(createDroitDto: CreateDroitDto) {
    return 'This action adds a new droit';
  }

  findAll() {
    return `This action returns all droit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} droit`;
  }

  update(id: number, updateDroitDto: UpdateDroitDto) {
    return `This action updates a #${id} droit`;
  }

  remove(id: number) {
    return `This action removes a #${id} droit`;
  }
}
