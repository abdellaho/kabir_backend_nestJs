import { Module } from '@nestjs/common';
import { CaisseService } from './caisse.service';
import { CaisseController } from './caisse.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CaisseController],
  providers: [CaisseService],
})
export class CaisseModule {}
