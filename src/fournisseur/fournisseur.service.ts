import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FournisseurService {

  constructor(private readonly databaseService: DatabaseService) {}

  create(fournisseurCreateInput: Prisma.FournisseurCreateInput) {
    return this.databaseService.fournisseur.create({
      data: fournisseurCreateInput,
    });
  }

  findAll() {
    return this.databaseService.fournisseur.findMany();
  }

  findOne(id: number) {
    return this.databaseService.fournisseur.findUnique({
      where: { id: BigInt(id) },
    });
  }

  update(id: number, fournisseurUpdateInput: Prisma.FournisseurUpdateInput) {
    return this.databaseService.fournisseur.update({
      where: { id: BigInt(id) },
      data: fournisseurUpdateInput,
    });
  }

  remove(id: number) {
    return this.databaseService.fournisseur.delete({
      where: { id: BigInt(id) },
    });
  }

  search(stock: Prisma.FournisseurCreateInput) {
    const where: Prisma.FournisseurWhereInput = {};

    if (stock.id) {
      where.id = BigInt(stock.id);
    }

    if (stock.designation && stock.designation.trim() !== '') {
      where.designation = stock.designation;
    }

    if (stock.supprimer !== undefined) {
      where.supprimer = stock.supprimer;
    }

    if (stock.archiver !== undefined) {
      where.archiver = stock.archiver;
    }

    return this.databaseService.fournisseur.findMany({ 
      where, 
      orderBy: {
        designation: 'asc'
      }
    });
  }

  async updateNbrOperation(id: number, typeOperation: number) {
    let nbr: number = 1;
    const fournisseurId = BigInt(id);
    
    if (![1, 2].includes(typeOperation)) {
      throw new Error(`Invalid operation type: ${typeOperation}`);
    }

    const nbrChange = typeOperation === 1 ? nbr : -nbr;

    try {
      const updatedFournisseur = await this.databaseService.fournisseur.update({
        where: { id: fournisseurId },
        data: {
          nbrOperation: {
            increment: nbrChange
          }
        }
      });

      console.log(
        'Updated Personnel:',
        'New nbrOperation:', updatedFournisseur.nbrOperation,
        'Change:', nbrChange,
        'Operation Type:', typeOperation === 1 ? 'ADD' : 'DELETE'
      );

      return updatedFournisseur;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new Error(`Fournisseur with id ${id} not found`);
      }
      throw error;
    }
  }

  async checkIfExists(data: Prisma.FournisseurCreateInput) {
    const { designation, tel1, tel2, id } = data;
    
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
    
    // Check designation equality
    if (designation) {
      orConditions.push({ designation });
    }
    
    // If no conditions provided, return false
    if (orConditions.length === 0) {
      return false;
    }
    
    // Build the query with OR conditions and exclude current id if provided
    const exists = await this.databaseService.fournisseur.findFirst({
      where: {
        OR: orConditions,
        ...(id && { id: { not: id } }) //Exclude the current record if updating
      }
    });
    
    return exists !== null;
  }
}
