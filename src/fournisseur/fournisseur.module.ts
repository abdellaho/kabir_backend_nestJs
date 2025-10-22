import { Module } from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';
import { FournisseurController } from './fournisseur.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FournisseurController],
  providers: [FournisseurService],
})
export class FournisseurModule {}
