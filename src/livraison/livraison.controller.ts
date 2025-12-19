import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LivraisonService } from './livraison.service';
import { Prisma } from 'prisma/generated/client'; 
import { mapToDateTimeBackEnd } from 'src/common/common-methods/common-methods';
import { DetLivraison } from 'prisma/generated/browser';
import { DetLivraisonService } from 'src/det-livraison/det-livraison.service';

@Controller('livraison')
export class LivraisonController {
  constructor(
    private readonly livraisonService: LivraisonService,
    private readonly detLivraisonService: DetLivraisonService,
  ) {}

  @Post()
  create(@Body() data: { livraison: Prisma.LivraisonCreateInput, detLivraisons: Prisma.DetLivraisonCreateManyInput[] }) {
    const { livraison } = data;
    let result = this.livraisonService.create(livraison);

    if(data.detLivraisons && data.detLivraisons.length > 0) {
      result.then(async (createdLivraison) => {
        const detLivraisonsToCreate: Prisma.DetLivraisonCreateManyInput[] = data.detLivraisons.map((detLivraison) => ({
          ...detLivraison,
          livraisonId: createdLivraison.id,
        }));
        await this.detLivraisonService.createMany(detLivraisonsToCreate);
        return createdLivraison;
      });
    }

    return result;
  }

  @Get()
  findAll() {
    return this.livraisonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let result = this.livraisonService.findOne(+id);
    let detLivraisons = this.detLivraisonService.findByLivraisonId(+id);

    return Promise.all([result, detLivraisons]).then(([livraison, dets]) => {
      return {
        livraison: livraison,
        detLivraisons: dets,
      };
    });
  }

  @Get(':id/with-det-livraison')
  findOneWithDetLivraison(@Param('id') id: string) {
    let result = this.livraisonService.findOne(+id);
    let detLivraisons = this.detLivraisonService.findByLivraisonId(+id);

    return Promise.all([result, detLivraisons]).then(([livraison, dets]) => {
      return {
        livraison: livraison,
        detLivraisons: dets,
      };
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: { livraison: Prisma.LivraisonUpdateInput, detLivraisons: Prisma.DetLivraisonCreateManyInput[] }) {
    console.log('Updating livraison with data:', data);
    
    const updatedLivraison = await this.livraisonService.update(+id, data.livraison);
    
    if (data.detLivraisons && data.detLivraisons.length > 0) {
      const detLivraisonsToCreate: Prisma.DetLivraisonCreateManyInput[] = data.detLivraisons
        .filter((detLivraison) => detLivraison.livraisonId == null)
        .map((detLivraison) => ({
          ...detLivraison,
          livraisonId: updatedLivraison.id,
        }));
      
      const detLivraisonsToUpdate: DetLivraison[] = data.detLivraisons.filter((detLivraison) => detLivraison.livraisonId != null) as DetLivraison[];
      
      // Update existing detLivraisons
      if (detLivraisonsToUpdate.length > 0) {
        await Promise.all(
          detLivraisonsToUpdate.map((detLivraison) => {
            const data: Prisma.DetLivraisonUpdateInput = {
              ...detLivraison,
              ...(detLivraison.livraisonId && { livraison: { connect: { id: detLivraison.livraisonId } } }),
              ...(detLivraison.stockId && { stock: { connect: { id: detLivraison.stockId } } }),
            };
            this.detLivraisonService.update(Number(detLivraison.id), data);
          })
        );
      }
      
      // Create new detLivraisons
      if (detLivraisonsToCreate.length > 0) {
        await this.detLivraisonService.createMany(detLivraisonsToCreate);
      }
    }
    
    return updatedLivraison;
  }
  
  update1(@Param('id') id: string, @Body() data: { livraison: Prisma.LivraisonUpdateInput, detLivraisons: Prisma.DetLivraisonCreateManyInput[] }) {
    let result = this.livraisonService.update(+id, data.livraison);
    if(data.detLivraisons && data.detLivraisons.length > 0) {
      result.then(async (updatedLivraison) => {
        const detLivraisonsToCreate: Prisma.DetLivraisonCreateManyInput[] = data.detLivraisons.filter((detLivraison) => detLivraison.livraisonId == null).map((detLivraison) => ({
          ...detLivraison,
          livraisonId: updatedLivraison.id,
        }));
        
        const detLivraisonsToUpdate: DetLivraison[] = data.detLivraisons.filter((detLivraison) => detLivraison.livraisonId != null) as DetLivraison[];
        if(detLivraisonsToUpdate.length > 0) {
          detLivraisonsToUpdate.forEach((detLivraison) => {
            this.detLivraisonService.update(Number(detLivraison.id), detLivraison);
          });
        }
        
        await this.detLivraisonService.createMany(detLivraisonsToCreate);
        return updatedLivraison;
      });
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.livraisonService.remove(+id);
  }

  @Post('last-num-livraison')
  hetLastNumLivraison(@Body() body: { dateBl: string; id: number }) {
    let date: Date = mapToDateTimeBackEnd(new Date(body.dateBl))
    return this.livraisonService.getLastNumeroLivraison(date, body.id);
  }
}
