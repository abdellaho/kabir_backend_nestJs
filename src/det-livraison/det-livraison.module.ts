import { Module } from '@nestjs/common';
import { DetLivraisonService } from './det-livraison.service';
import { DetLivraisonController } from './det-livraison.controller';

@Module({
  controllers: [DetLivraisonController],
  providers: [DetLivraisonService],
})
export class DetLivraisonModule {}
