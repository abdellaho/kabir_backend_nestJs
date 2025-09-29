import { Module } from '@nestjs/common';
import { CompteCaisseService } from './compte-caisse.service';
import { CompteCaisseController } from './compte-caisse.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CompteCaisseController],
  providers: [CompteCaisseService],
})
export class CompteCaisseModule {}
