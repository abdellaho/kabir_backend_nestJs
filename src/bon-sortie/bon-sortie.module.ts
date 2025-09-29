import { Module } from '@nestjs/common';
import { BonSortieService } from './bon-sortie.service';
import { BonSortieController } from './bon-sortie.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BonSortieController],
  providers: [BonSortieService],
})
export class BonSortieModule {}
