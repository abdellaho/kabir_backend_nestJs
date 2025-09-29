import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BulttinPaiService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createBulttinPaiDto: Prisma.BulttinPaiCreateInput) {
    return this.databaseService.bulttinPai.create({
      data: createBulttinPaiDto,
    });
  }

  findAll() {
    return this.databaseService.bulttinPai.findMany();
  }

  findOne(id: number) {
    return this.databaseService.bulttinPai.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateBulttinPaiDto: Prisma.BulttinPaiUpdateInput) {
    return this.databaseService.bulttinPai.update({
      where: { id: BigInt(id) },
      data: updateBulttinPaiDto,
    });
  }

  remove(id: number) {
    return this.databaseService.bulttinPai.delete({
      where: { id: BigInt(id) },
    });
  }
}
