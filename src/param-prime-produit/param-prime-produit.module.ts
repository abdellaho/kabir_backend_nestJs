import { Module } from '@nestjs/common';
import { ParamPrimeProduitService } from './param-prime-produit.service';
import { ParamPrimeProduitController } from './param-prime-produit.controller';

@Module({
  controllers: [ParamPrimeProduitController],
  providers: [ParamPrimeProduitService],
})
export class ParamPrimeProduitModule {}
