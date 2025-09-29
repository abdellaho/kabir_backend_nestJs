import { Module } from '@nestjs/common';
import { LivraisonService } from './livraison.service';
import { LivraisonController } from './livraison.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LivraisonController],
  providers: [LivraisonService],
})
export class LivraisonModule {}
