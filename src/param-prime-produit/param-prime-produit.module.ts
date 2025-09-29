import { Module } from '@nestjs/common';
import { ParamPrimeProduitService } from './param-prime-produit.service';
import { ParamPrimeProduitController } from './param-prime-produit.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ParamPrimeProduitController],
  providers: [ParamPrimeProduitService],
})
export class ParamPrimeProduitModule {}
