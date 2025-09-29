import { Module } from '@nestjs/common';
import { DetLivraisonService } from './det-livraison.service';
import { DetLivraisonController } from './det-livraison.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DetLivraisonController],
  providers: [DetLivraisonService],
})
export class DetLivraisonModule {}
