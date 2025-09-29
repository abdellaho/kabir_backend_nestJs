import { Module } from '@nestjs/common';
import { AchatLivraisonService } from './achat-livraison.service';
import { AchatLivraisonController } from './achat-livraison.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AchatLivraisonController],
  providers: [AchatLivraisonService],
})
export class AchatLivraisonModule {}
