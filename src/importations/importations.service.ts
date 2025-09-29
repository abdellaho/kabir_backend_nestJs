import { Injectable } from '@nestjs/common';
import { CreateImportationDto } from './dto/create-importation.dto';
import { UpdateImportationDto } from './dto/update-importation.dto';

@Injectable()
export class ImportationsService {
  create(createImportationDto: CreateImportationDto) {
    return 'This action adds a new importation';
  }

  findAll() {
    return `This action returns all importations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} importation`;
  }

  update(id: number, updateImportationDto: UpdateImportationDto) {
    return `This action updates a #${id} importation`;
  }

  remove(id: number) {
    return `This action removes a #${id} importation`;
  }
}
