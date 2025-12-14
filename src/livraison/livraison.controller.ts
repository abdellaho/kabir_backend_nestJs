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
    return this.livraisonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLivraisonDto: Prisma.LivraisonUpdateInput) {
    return this.livraisonService.update(+id, updateLivraisonDto);
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
