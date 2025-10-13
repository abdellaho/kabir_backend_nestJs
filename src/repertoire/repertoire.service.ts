import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { RepertoireSearch } from 'src/common/searchModels/repertoire-search';
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

  async checkIfExists(data: RepertoireSearch) {
    const { tel1, tel2, designation, login, id } = data;
    
    const orConditions: any[] = [];
    
    // Check if tel1 matches any phone field in the database (tel1, tel2, or tel3)
    if (tel1) {
      orConditions.push(
        { tel1: tel1 },
        { tel2: tel1 }
      );
    }
    
    // Check if tel2 matches any phone field in the database (tel1, tel2, or tel3)
    if (tel2) {
      orConditions.push(
        { tel1: tel2 },
        { tel2: tel2 }
      );
    }
    
    // Check login equality
    if (login) {
      orConditions.push({ login });
    }
    
    // Check designation equality
    if (designation) {
      orConditions.push({ designation });
    }
    
    // If no conditions provided, return false
    if (orConditions.length === 0) {
      return false;
    }
    
    // Build the query with OR conditions and exclude current id if provided
    const exists = await this.databaseService.repertoire.findFirst({
      where: {
        OR: orConditions,
        ...(id && { id: { not: id } }) //Exclude the current record if updating
      }
    });
    
    return exists !== null;
  }
}
