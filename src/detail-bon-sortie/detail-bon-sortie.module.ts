import { Module } from '@nestjs/common';
import { DetailBonSortieService } from './detail-bon-sortie.service';
import { DetailBonSortieController } from './detail-bon-sortie.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DetailBonSortieController],
  providers: [DetailBonSortieService],
})
export class DetailBonSortieModule {}
