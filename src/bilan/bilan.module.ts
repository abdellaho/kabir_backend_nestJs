import { Module } from '@nestjs/common';
import { BilanService } from './bilan.service';
import { BilanController } from './bilan.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BilanController],
  providers: [BilanService],
})
export class BilanModule {}
