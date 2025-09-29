import { Module } from '@nestjs/common';
import { LivraisonService } from './livraison.service';
import { LivraisonController } from './livraison.controller';

@Module({
  controllers: [LivraisonController],
  providers: [LivraisonService],
})
export class LivraisonModule {}
