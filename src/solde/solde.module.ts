import { Module } from '@nestjs/common';
import { SoldeService } from './solde.service';
import { SoldeController } from './solde.controller';

@Module({
  controllers: [SoldeController],
  providers: [SoldeService],
})
export class SoldeModule {}
