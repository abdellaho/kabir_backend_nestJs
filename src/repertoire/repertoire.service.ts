import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Prisma } from 'generated/prisma';
import { RepertoireSearch } from 'src/common/searchModels/repertoire-search';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RepertoireService {

  private readonly saltRounds = 10;

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createRepertoireDto: Prisma.RepertoireCreateInput) {
    if (createRepertoireDto.password) {
      createRepertoireDto.password = await bcrypt.hash(createRepertoireDto.password, this.saltRounds);
    }

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

  async update(id: number, updateRepertoireDto: Prisma.RepertoireUpdateInput) {
    if (updateRepertoireDto.password) {
      updateRepertoireDto.password = await bcrypt.hash(updateRepertoireDto.password as string, this.saltRounds);
    }

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

  async validatePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
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
