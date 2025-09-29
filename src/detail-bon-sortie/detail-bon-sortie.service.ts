import { Injectable } from '@nestjs/common';
import { CreateDetailBonSortieDto } from './dto/create-detail-bon-sortie.dto';
import { UpdateDetailBonSortieDto } from './dto/update-detail-bon-sortie.dto';

@Injectable()
export class DetailBonSortieService {
  create(createDetailBonSortieDto: CreateDetailBonSortieDto) {
    return 'This action adds a new detailBonSortie';
  }

  findAll() {
    return `This action returns all detailBonSortie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailBonSortie`;
  }

  update(id: number, updateDetailBonSortieDto: UpdateDetailBonSortieDto) {
    return `This action updates a #${id} detailBonSortie`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailBonSortie`;
  }
}
