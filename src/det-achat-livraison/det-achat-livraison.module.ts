import { Module } from '@nestjs/common';
import { DetAchatLivraisonService } from './det-achat-livraison.service';
import { DetAchatLivraisonController } from './det-achat-livraison.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DetAchatLivraisonController],
  providers: [DetAchatLivraisonService],
})
export class DetAchatLivraisonModule {}
