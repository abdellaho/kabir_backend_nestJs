import { Injectable } from '@nestjs/common';
import { CreateDetLivraisonDto } from './dto/create-det-livraison.dto';
import { UpdateDetLivraisonDto } from './dto/update-det-livraison.dto';

@Injectable()
export class DetLivraisonService {
  create(createDetLivraisonDto: CreateDetLivraisonDto) {
    return 'This action adds a new detLivraison';
  }

  findAll() {
    return `This action returns all detLivraison`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detLivraison`;
  }

  update(id: number, updateDetLivraisonDto: UpdateDetLivraisonDto) {
    return `This action updates a #${id} detLivraison`;
  }

  remove(id: number) {
    return `This action removes a #${id} detLivraison`;
  }
}
