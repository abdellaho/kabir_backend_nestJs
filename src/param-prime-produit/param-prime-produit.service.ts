import { Injectable } from '@nestjs/common';
import { CreateParamPrimeProduitDto } from './dto/create-param-prime-produit.dto';
import { UpdateParamPrimeProduitDto } from './dto/update-param-prime-produit.dto';

@Injectable()
export class ParamPrimeProduitService {
  create(createParamPrimeProduitDto: CreateParamPrimeProduitDto) {
    return 'This action adds a new paramPrimeProduit';
  }

  findAll() {
    return `This action returns all paramPrimeProduit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paramPrimeProduit`;
  }

  update(id: number, updateParamPrimeProduitDto: UpdateParamPrimeProduitDto) {
    return `This action updates a #${id} paramPrimeProduit`;
  }

  remove(id: number) {
    return `This action removes a #${id} paramPrimeProduit`;
  }
}
