import { Module } from '@nestjs/common';
import { ComptabiliteService } from './comptabilite.service';
import { ComptabiliteController } from './comptabilite.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ComptabiliteController],
  providers: [ComptabiliteService],
})
export class ComptabiliteModule {}
