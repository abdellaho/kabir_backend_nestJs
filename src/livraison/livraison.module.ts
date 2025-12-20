import { Module } from '@nestjs/common';
import { LivraisonService } from './livraison.service';
import { LivraisonController } from './livraison.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DetLivraisonService } from 'src/det-livraison/det-livraison.service';

@Module({
  imports: [DatabaseModule],
  controllers: [LivraisonController],
  providers: [LivraisonService, DetLivraisonService],
})
export class LivraisonModule {}
