import { Module } from '@nestjs/common';
import { DetailBonSortieService } from './detail-bon-sortie.service';
import { DetailBonSortieController } from './detail-bon-sortie.controller';

@Module({
  controllers: [DetailBonSortieController],
  providers: [DetailBonSortieService],
})
export class DetailBonSortieModule {}
