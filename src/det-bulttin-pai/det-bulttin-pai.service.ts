import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DetBulttinPaiService {

  constructor(private readonly dataBaseService: DatabaseService) {}

  create(createDetBulttinPaiDto: Prisma.DetBulttinPaiCreateInput) {
    return this.dataBaseService.detBulttinPai.create({
       data: createDetBulttinPaiDto 
    });
  }

  findAll() {
    return this.dataBaseService.detBulttinPai.findMany();
  }

  findOne(id: number) {
    return this.dataBaseService.detBulttinPai.findUnique({
       where: { id: BigInt(id) } 
    });
  }

  update(id: number, updateDetBulttinPaiDto: Prisma.DetBulttinPaiUpdateInput) {
    return this.dataBaseService.detBulttinPai.update({
       where: { id: BigInt(id) },
       data: updateDetBulttinPaiDto 
    });
  }

  remove(id: number) {
    return this.dataBaseService.detBulttinPai.delete({
       where: { id: BigInt(id) } 
    });
  }
}
