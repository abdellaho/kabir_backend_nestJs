import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from 'generated/prisma';
import { AbsenceSearch } from './search/absenceSearch';

@Injectable()
export class AbsenceService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createAbsenceDto: Prisma.AbsenceCreateInput) {
    return this.databaseService.absence.create({
      data: createAbsenceDto,
    });
  }

  findAll() {
    return this.databaseService.absence.findMany();
  }

  findOne(id: number) {
    return this.databaseService.absence.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, updateAbsenceDto: Prisma.AbsenceUpdateInput) {
    return this.databaseService.absence.update({
      where: { id: BigInt(id) },
      data: updateAbsenceDto,
    });
  }

  remove(id: number) {
    return this.databaseService.absence.delete({
      where: { id: BigInt(id) },
    });
  }

  async checkIfExists1(data: Prisma.AbsenceCreateInput) {
    const { dateAbsence, personnel } = data;
    
    // Build the query with OR conditions and exclude current id if provided
    const exists = await this.databaseService.absence.findFirst({
      where: {
        dateAbsence: dateAbsence,
        personnelId: personnel.connect?.id
      }
    });
    
    return exists !== null;
  }

  async checkIfExists(data: AbsenceSearch) {
    const { id, dateAbsence, personnelId } = data;

    // Base condition
    const where: Prisma.AbsenceWhereInput = {
      dateAbsence: this.normalizeDate(dateAbsence!),
      personnelId
    };
    
    if (id) {
      where.id = { not: id };
    }

    const exists = await this.databaseService.absence.findFirst({ where });

    return exists !== null;
  }

  normalizeDate(date: Date | string): Date {
    return typeof date === 'string' ? new Date(date) : new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

}
