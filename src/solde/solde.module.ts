import { Module } from '@nestjs/common';
import { SoldeService } from './solde.service';
import { SoldeController } from './solde.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SoldeController],
  providers: [SoldeService],
})
export class SoldeModule {}
