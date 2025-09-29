import { Module } from '@nestjs/common';
import { DetBulttinLivraisonService } from './det-bulttin-livraison.service';
import { DetBulttinLivraisonController } from './det-bulttin-livraison.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DetBulttinLivraisonController],
  providers: [DetBulttinLivraisonService],
})
export class DetBulttinLivraisonModule {}
