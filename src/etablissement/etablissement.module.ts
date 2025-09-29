import { Module } from '@nestjs/common';
import { EtablissementService } from './etablissement.service';
import { EtablissementController } from './etablissement.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EtablissementController],
  providers: [EtablissementService],
})
export class EtablissementModule {}
