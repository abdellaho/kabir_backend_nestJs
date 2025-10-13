import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RepertoireService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(createRepertoireDto: Prisma.RepertoireCreateInput) {
    return this.databaseService.repertoire.create({
      data: createRepertoireDto
    });
  }

  findAll() {
    return this.databaseService.repertoire.findMany();
  }

  findOne(id: number) {
    return this.databaseService.repertoire.findUnique({
      where: { id: BigInt(id) }
    });
  }

  update(id: number, updateRepertoireDto: Prisma.RepertoireUpdateInput) {
    return this.databaseService.repertoire.update({
      where: { id: BigInt(id) },
      data: updateRepertoireDto
    });
  }

  remove(id: number) {
    return this.databaseService.repertoire.delete({
      where: { id: BigInt(id) }
    });
  }

   checkIfExists(data: {
  tel1?: string;
  tel2?: string;
  designation?: string;
  login?: string;
  id?: number;
}) {
  const { tel1, tel2, designation, login, id } = data;

  const conditions: any[] = [];

  // Add conditions only for provided fields
  if (tel1) {
    conditions.push({ tel1 });
  }
  if (tel2) {
    conditions.push({ tel2 });
  }
  if (designation) {
    conditions.push({ designation });
  }
  if (login) {
    conditions.push({ login });
  }

  // If no conditions provided, return false
  if (conditions.length === 0) {
    return false;
  }

  // Build the query
  const exists = this.databaseService.repertoire.findFirst({
    where: {
      OR: conditions,
      ...(id && { id: { not: id } }) // Exclude the current id if provided
    }
  });

  return exists !== null;
}
}
