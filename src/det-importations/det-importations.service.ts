import { Injectable } from '@nestjs/common';
import { CreateDetImportationDto } from './dto/create-det-importation.dto';
import { UpdateDetImportationDto } from './dto/update-det-importation.dto';

@Injectable()
export class DetImportationsService {
  create(createDetImportationDto: CreateDetImportationDto) {
    return 'This action adds a new detImportation';
  }

  findAll() {
    return `This action returns all detImportations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detImportation`;
  }

  update(id: number, updateDetImportationDto: UpdateDetImportationDto) {
    return `This action updates a #${id} detImportation`;
  }

  remove(id: number) {
    return `This action removes a #${id} detImportation`;
  }
}
