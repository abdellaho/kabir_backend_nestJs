import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PersonnelService {
  private readonly saltRounds = 10;

  constructor(private readonly databaseService: DatabaseService) {}

  async create(personnelCreateInput: Prisma.PersonnelCreateInput) {
    if (personnelCreateInput.password) {
      personnelCreateInput.password = await bcrypt.hash(personnelCreateInput.password, this.saltRounds);
    }

    return this.databaseService.personnel.create({
      data: personnelCreateInput,
    });
  }

  findAll() {
    return this.databaseService.personnel.findMany();
  }

  findOne(id: number) {
    return this.databaseService.personnel.findUnique({
      where: { id: BigInt(id) },
    });
  }

  async update(id: number, personnelUpdateInput: Prisma.PersonnelUpdateInput) {
    if (personnelUpdateInput.password) {
      personnelUpdateInput.password = await bcrypt.hash(personnelUpdateInput.password as string, this.saltRounds);
    }

    return this.databaseService.personnel.update({
      where: { id: BigInt(id) },
      data: personnelUpdateInput,
    });
  }

  remove(id: number) {
    return this.databaseService.personnel.delete({
      where: { id: BigInt(id) },
    });
  }

  async checkIfExists(data: Prisma.PersonnelCreateInput) {
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
    const exists = await this.databaseService.personnel.findFirst({
      where: {
        OR: orConditions,
        ...(id && { id: { not: id } }) //Exclude the current record if updating
      }
    });
    
    return exists !== null;
  }

  search(data: Prisma.PersonnelCreateInput) {
    const where: Prisma.PersonnelWhereInput = {};

    if (data.id) {
      where.id = BigInt(data.id);
    }

    if (data.designation && data.designation.trim() !== '') {
      where.designation = data.designation;
    }

    if (data.supprimer !== undefined) {
      where.supprimer = data.supprimer;
    }

    if (data.archiver !== undefined) {
      where.archiver = data.archiver;
    }

    return this.databaseService.personnel.findMany({ 
      where,
      orderBy: {
        designation: 'asc'
      }
    });
  }

}
