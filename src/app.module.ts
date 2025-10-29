import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VilleModule } from './ville/ville.module';
import { EtablissementModule } from './etablissement/etablissement.module';
import { ParamPrimeModule } from './param-prime/param-prime.module';
import { ParamComissModule } from './param-comiss/param-comiss.module';
import { RepertoireModule } from './repertoire/repertoire.module';
import { StockModule } from './stock/stock.module';
import { EmployeModule } from './employe/employe.module';
import { DroitModule } from './droit/droit.module';
import { DatabaseModule } from './database/database.module';
import { AbsenceModule } from './absence/absence.module';
import { AchatFactureModule } from './achat-facture/achat-facture.module';
import { AchatLivraisonModule } from './achat-livraison/achat-livraison.module';
import { BalanceModule } from './balance/balance.module';
import { BilanModule } from './bilan/bilan.module';
import { BonSortieModule } from './bon-sortie/bon-sortie.module';
import { BulttinPaiModule } from './bulttin-pai/bulttin-pai.module';
import { CaisseModule } from './caisse/caisse.module';
import { ChequeModule } from './cheque/cheque.module';
import { ComptaModule } from './compta/compta.module';
import { ComptabiliteModule } from './comptabilite/comptabilite.module';
import { CompteCaisseModule } from './compte-caisse/compte-caisse.module';
import { DetAchatFactureModule } from './det-achat-facture/det-achat-facture.module';
import { DetAchatLivraisonModule } from './det-achat-livraison/det-achat-livraison.module';
import { DetailBonSortieModule } from './detail-bon-sortie/detail-bon-sortie.module';
import { DetBulttinLivraisonModule } from './det-bulttin-livraison/det-bulttin-livraison.module';
import { DetBulttinPaiModule } from './det-bulttin-pai/det-bulttin-pai.module';
import { DetFactureModule } from './det-facture/det-facture.module';
import { DetImportationsModule } from './det-importations/det-importations.module';
import { DetLivraisonModule } from './det-livraison/det-livraison.module';
import { FactureModule } from './facture/facture.module';
import { ImportationsModule } from './importations/importations.module';
import { LivraisonModule } from './livraison/livraison.module';
import { PlanComptableModule } from './plan-comptable/plan-comptable.module';
import { SoldeModule } from './solde/solde.module';
import { PersonnelModule } from './personnel/personnel.module';
import { VoitureModule } from './voiture/voiture.module';
import { FournisseurModule } from './fournisseur/fournisseur.module';

@Module({
  imports: [VilleModule, EtablissementModule, ParamPrimeModule, ParamComissModule, RepertoireModule, StockModule, EmployeModule, DroitModule, DatabaseModule, AbsenceModule, AchatFactureModule, AchatLivraisonModule, BalanceModule, BilanModule, BonSortieModule, BulttinPaiModule, CaisseModule, ChequeModule, ComptaModule, ComptabiliteModule, CompteCaisseModule, DetAchatFactureModule, DetAchatLivraisonModule, DetailBonSortieModule, DetBulttinLivraisonModule, DetBulttinPaiModule, DetFactureModule, DetImportationsModule, DetLivraisonModule, FactureModule, ImportationsModule, LivraisonModule, PlanComptableModule, SoldeModule, PersonnelModule, VoitureModule, FournisseurModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
