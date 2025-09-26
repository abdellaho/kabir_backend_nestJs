import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaysModule } from './pays/pays.module';
import { VilleModule } from './ville/ville.module';
import { EtablissementModule } from './etablissement/etablissement.module';
import { ParamPrimeModule } from './param-prime/param-prime.module';
import { ParamComissModule } from './param-comiss/param-comiss.module';
import { ParamPrimeProduitModule } from './param-prime-produit/param-prime-produit.module';
import { RepertoireModule } from './repertoire/repertoire.module';
import { StockModule } from './stock/stock.module';
import { EmployeModule } from './employe/employe.module';
import { DroitModule } from './droit/droit.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PaysModule, VilleModule, EtablissementModule, ParamPrimeModule, ParamComissModule, ParamPrimeProduitModule, RepertoireModule, StockModule, EmployeModule, DroitModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
