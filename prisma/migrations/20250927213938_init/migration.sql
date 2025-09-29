/*
  Warnings:

  - The primary key for the `droit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `employe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `etablissement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `paramcommiss` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `paramprime` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `paramprimeproduit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pays` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `repertoire` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `stock` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ville` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `employe` DROP FOREIGN KEY `Employe_repertoireId_fkey`;

-- DropForeignKey
ALTER TABLE `etablissement` DROP FOREIGN KEY `Etablissement_villeId_fkey`;

-- DropForeignKey
ALTER TABLE `paramprimeproduit` DROP FOREIGN KEY `ParamPrimeProduit_stockId_fkey`;

-- DropForeignKey
ALTER TABLE `repertoire` DROP FOREIGN KEY `Repertoire_repertoireId_fkey`;

-- DropForeignKey
ALTER TABLE `repertoire` DROP FOREIGN KEY `Repertoire_villeId_fkey`;

-- DropForeignKey
ALTER TABLE `stock` DROP FOREIGN KEY `Stock_repertoireId_fkey`;

-- DropForeignKey
ALTER TABLE `ville` DROP FOREIGN KEY `Ville_paysId_fkey`;

-- DropIndex
DROP INDEX `Employe_repertoireId_fkey` ON `employe`;

-- DropIndex
DROP INDEX `Etablissement_villeId_fkey` ON `etablissement`;

-- DropIndex
DROP INDEX `ParamPrimeProduit_stockId_fkey` ON `paramprimeproduit`;

-- DropIndex
DROP INDEX `Repertoire_repertoireId_fkey` ON `repertoire`;

-- DropIndex
DROP INDEX `Repertoire_villeId_fkey` ON `repertoire`;

-- DropIndex
DROP INDEX `Stock_repertoireId_fkey` ON `stock`;

-- DropIndex
DROP INDEX `Ville_paysId_fkey` ON `ville`;

-- AlterTable
ALTER TABLE `droit` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `employe` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `repertoireId` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `etablissement` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `villeId` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `paramcommiss` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `paramprime` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `paramprimeproduit` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `stockId` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `pays` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `repertoire` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `repertoireId` BIGINT NULL,
    MODIFY `villeId` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `stock` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `repertoireId` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `ville` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `paysId` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Absence` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `dateAbsence` DATE NOT NULL,
    `matin` BOOLEAN NOT NULL DEFAULT false,
    `apresMidi` BOOLEAN NOT NULL DEFAULT false,
    `dateOperation` DATETIME(3) NOT NULL,
    `employeOperationId` BIGINT NOT NULL,
    `penalite` DECIMAL(65, 30) NOT NULL,
    `repertoireId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AchatFacture` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `codeAF` VARCHAR(191) NOT NULL,
    `numAchat` INTEGER NOT NULL,
    `dateAF` DATE NOT NULL,
    `sysDate` DATETIME(3) NOT NULL,
    `dateAvances` DATE NOT NULL,
    `mantantAvancs` DECIMAL(65, 30) NOT NULL,
    `prixNormalAchatHt` INTEGER NOT NULL,
    `numeroFacExterne` VARCHAR(191) NOT NULL,
    `numeroIF` VARCHAR(191) NOT NULL,
    `mantantAF` DECIMAL(65, 30) NOT NULL,
    `mantantBFBenefice` DECIMAL(65, 30) NOT NULL,
    `montantNonTaxable` DECIMAL(65, 30) NOT NULL,
    `dateReglement` DATE NOT NULL,
    `typeReglment` INTEGER NOT NULL,
    `typePaiement` VARCHAR(191) NOT NULL,
    `numCheque` VARCHAR(191) NOT NULL,
    `mantantTotHT` DECIMAL(65, 30) NOT NULL,
    `mantantTotHTVA` DECIMAL(65, 30) NOT NULL,
    `mantantTotTTC` DECIMAL(65, 30) NOT NULL,
    `tva20` DECIMAL(65, 30) NOT NULL,
    `tva7` DECIMAL(65, 30) NOT NULL,
    `tvaArbtraire` DECIMAL(65, 30) NOT NULL,
    `manuelAutoMatique` INTEGER NOT NULL,
    `mntManuelTva7` DECIMAL(65, 30) NOT NULL,
    `mntManuelTva10` DECIMAL(65, 30) NOT NULL,
    `mntManuelTva12` DECIMAL(65, 30) NOT NULL,
    `mntManuelTva13` DECIMAL(65, 30) NOT NULL,
    `mntManuelTva14` DECIMAL(65, 30) NOT NULL,
    `mntManuelTva20` DECIMAL(65, 30) NOT NULL,
    `montantTVA7` DECIMAL(65, 30) NOT NULL,
    `montantTVA10` DECIMAL(65, 30) NOT NULL,
    `montantTVA12` DECIMAL(65, 30) NOT NULL,
    `montantTVA13` DECIMAL(65, 30) NOT NULL,
    `montantTVA14` DECIMAL(65, 30) NOT NULL,
    `montantTVA20` DECIMAL(65, 30) NOT NULL,
    `mntHtTVA7` DECIMAL(65, 30) NOT NULL,
    `mntHtTVA10` DECIMAL(65, 30) NOT NULL,
    `mntHtTVA12` DECIMAL(65, 30) NOT NULL,
    `mntHtTVA13` DECIMAL(65, 30) NOT NULL,
    `mntHtTVA14` DECIMAL(65, 30) NOT NULL,
    `mntHtTVA20` DECIMAL(65, 30) NOT NULL,
    `mntTtcTVA7` DECIMAL(65, 30) NOT NULL,
    `mntTtcTVA10` DECIMAL(65, 30) NOT NULL,
    `mntTtcTVA12` DECIMAL(65, 30) NOT NULL,
    `mntTtcTVA13` DECIMAL(65, 30) NOT NULL,
    `mntTtcTVA14` DECIMAL(65, 30) NOT NULL,
    `mntTtcTVA20` DECIMAL(65, 30) NOT NULL,
    `mntTtc` DECIMAL(65, 30) NOT NULL,
    `montantDroitSupplementaire` DECIMAL(65, 30) NOT NULL,
    `disabledHT` BOOLEAN NOT NULL DEFAULT false,
    `disabledManuel` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AchatLivraison` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `codeAL` VARCHAR(191) NOT NULL,
    `numAchat` INTEGER NOT NULL,
    `dateAL` DATE NOT NULL,
    `sysDate` DATETIME(3) NOT NULL,
    `prixNormalAchatHt` INTEGER NOT NULL,
    `numeroBlExterne` VARCHAR(191) NOT NULL,
    `mantantAL` DECIMAL(65, 30) NOT NULL,
    `mantantALTTC` DECIMAL(65, 30) NOT NULL,
    `mantantALTVA20` DECIMAL(65, 30) NOT NULL,
    `mantantALTVA7` DECIMAL(65, 30) NOT NULL,
    `totalMantantALTVA` DECIMAL(65, 30) NOT NULL,
    `mantantBFBenefice` DECIMAL(65, 30) NOT NULL,
    `montantTVA7` DECIMAL(65, 30) NOT NULL,
    `montantTVA10` DECIMAL(65, 30) NOT NULL,
    `montantTVA14` DECIMAL(65, 30) NOT NULL,
    `montantTVA20` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Balance` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `dateBalance` DATE NOT NULL,
    `nature` VARCHAR(191) NOT NULL,
    `debitPrec` DECIMAL(65, 30) NOT NULL,
    `creditPrec` DECIMAL(65, 30) NOT NULL,
    `debit` DECIMAL(65, 30) NOT NULL,
    `credit` DECIMAL(65, 30) NOT NULL,
    `soldeDebiteur` DECIMAL(65, 30) NOT NULL,
    `soldeCrediteur` DECIMAL(65, 30) NOT NULL,
    `planComptableId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bilan` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `date1` DATE NOT NULL,
    `date2` DATE NOT NULL,
    `stock` DECIMAL(65, 30) NOT NULL,
    `banque` DECIMAL(65, 30) NOT NULL,
    `caisse1` DECIMAL(65, 30) NOT NULL,
    `caisse2` DECIMAL(65, 30) NOT NULL,
    `actifDivers` DECIMAL(65, 30) NOT NULL,
    `capital` DECIMAL(65, 30) NOT NULL,
    `dgi` DECIMAL(65, 30) NOT NULL,
    `cnss` DECIMAL(65, 30) NOT NULL,
    `loyer` DECIMAL(65, 30) NOT NULL,
    `salaire` DECIMAL(65, 30) NOT NULL,
    `tva` DECIMAL(65, 30) NOT NULL,
    `chiffreAffaire` DECIMAL(65, 30) NOT NULL,
    `passifDivers` DECIMAL(65, 30) NOT NULL,
    `compteCourant` DECIMAL(65, 30) NOT NULL,
    `resultatPrecedent` DECIMAL(65, 30) NOT NULL,
    `resultat` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BonSortie` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `numSortie` INTEGER NOT NULL,
    `codeSortie` VARCHAR(191) NOT NULL,
    `dateOperation` TIMESTAMP(0) NOT NULL,
    `mnt` DECIMAL(65, 30) NOT NULL,
    `employeId` BIGINT NOT NULL,
    `repertoireId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BulttinPai` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `codeBultin` VARCHAR(191) NOT NULL,
    `observation` VARCHAR(191) NOT NULL,
    `numbultin` INTEGER NOT NULL,
    `dateOperation` TIMESTAMP(0) NOT NULL,
    `dateDebut` DATE NOT NULL,
    `dateFin` DATE NOT NULL,
    `idTypeBultinPai` INTEGER NOT NULL,
    `salairefx` DECIMAL(65, 30) NOT NULL,
    `commission` DECIMAL(65, 30) NOT NULL,
    `frais` DECIMAL(65, 30) NOT NULL,
    `total` DECIMAL(65, 30) NOT NULL,
    `totalMntVendue` DECIMAL(65, 30) NOT NULL,
    `totalMntVendueProduit` DECIMAL(65, 30) NOT NULL,
    `totalMntVendueLivraison` DECIMAL(65, 30) NOT NULL,
    `mntNegative` DECIMAL(65, 30) NOT NULL,
    `mntNegativeProduit` DECIMAL(65, 30) NOT NULL,
    `mntNegativeLivraison` DECIMAL(65, 30) NOT NULL,
    `mntCNSS` DECIMAL(65, 30) NOT NULL,
    `mntPenalite` DECIMAL(65, 30) NOT NULL,
    `mntBenefice` DECIMAL(65, 30) NOT NULL,
    `commissionParProduit` DECIMAL(65, 30) NOT NULL,
    `primeSpecial` DECIMAL(65, 30) NOT NULL,
    `fraisSupp` DECIMAL(65, 30) NOT NULL,
    `primeCommercial` DECIMAL(65, 30) NOT NULL,
    `externe` BOOLEAN NOT NULL,
    `totalMntVenduePrixCommercial` DECIMAL(65, 30) NOT NULL,
    `totalMntVendueSansPrixCommercial` DECIMAL(65, 30) NOT NULL,
    `primeProduit` DECIMAL(65, 30) NOT NULL,
    `commercailId` BIGINT NOT NULL,
    `employeOperateurId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Caisse` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `montant` DECIMAL(65, 30) NOT NULL,
    `dateOperation` DATE NOT NULL,
    `type` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cheque` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `numero` VARCHAR(191) NOT NULL,
    `codeCheque` VARCHAR(191) NOT NULL,
    `dateCheque` DATE NOT NULL,
    `typeRepertoire` INTEGER NOT NULL,
    `montant` DECIMAL(65, 30) NOT NULL,
    `typePersoScte` INTEGER NOT NULL,
    `numCheque` INTEGER NOT NULL,
    `etatcheque` BOOLEAN NOT NULL DEFAULT false,
    `typeReglment` INTEGER NOT NULL,
    `repertoireId` BIGINT NOT NULL,
    `employeOperateurId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compta` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `dateDebut` DATE NOT NULL,
    `dateFin` DATE NOT NULL,
    `montantTVAPrecedent` DECIMAL(65, 30) NOT NULL,
    `montantTVAAchat` DECIMAL(65, 30) NOT NULL,
    `montantTVAVente` DECIMAL(65, 30) NOT NULL,
    `resutMnt` DECIMAL(65, 30) NOT NULL,
    `repertoireId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comptabilite` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `montantTTC` DECIMAL(65, 30) NOT NULL,
    `montantTVA` DECIMAL(65, 30) NOT NULL,
    `montantTVA0` DECIMAL(65, 30) NOT NULL,
    `montantTVA7` DECIMAL(65, 30) NOT NULL,
    `montantTVA10` DECIMAL(65, 30) NOT NULL,
    `montantTVA14` DECIMAL(65, 30) NOT NULL,
    `montantTVA20` DECIMAL(65, 30) NOT NULL,
    `montantHT` DECIMAL(65, 30) NOT NULL,
    `montantHT7` DECIMAL(65, 30) NOT NULL,
    `montantHT10` DECIMAL(65, 30) NOT NULL,
    `montantHT14` DECIMAL(65, 30) NOT NULL,
    `montantHT20` DECIMAL(65, 30) NOT NULL,
    `modeReglement` VARCHAR(191) NOT NULL,
    `typeManuelAuto` INTEGER NOT NULL,
    `typeReglement` INTEGER NOT NULL,
    `dateFacture` DATE NOT NULL,
    `dateRegelement` DATE NOT NULL,
    `numFcture` VARCHAR(191) NOT NULL,
    `montantDroitSupplementaire` DECIMAL(65, 30) NOT NULL,
    `typeRepertoire` INTEGER NOT NULL,
    `repertoireId` BIGINT NOT NULL,
    `employeOperateurId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CompteCaisse` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `date` DATE NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `numFacture` VARCHAR(191) NOT NULL,
    `montant` DECIMAL(65, 30) NOT NULL,
    `compteCaisse` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetAchatFacture` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `unitegratuit` INTEGER NOT NULL,
    `qteacheter` INTEGER NOT NULL,
    `prixAchatHt` DECIMAL(65, 30) NOT NULL,
    `prixAchatTtc` DECIMAL(65, 30) NOT NULL,
    `remiseAchat` DECIMAL(65, 30) NOT NULL,
    `prixVenteTtc` DECIMAL(65, 30) NOT NULL,
    `mantantHt` DECIMAL(65, 30) NOT NULL,
    `mantantTTC` DECIMAL(65, 30) NOT NULL,
    `prixVenteAchatHT` DECIMAL(65, 30) NOT NULL,
    `beneficeDH` DECIMAL(65, 30) NOT NULL,
    `benepourcentage` DECIMAL(65, 30) NOT NULL,
    `tva20` DECIMAL(65, 30) NOT NULL,
    `tva7` DECIMAL(65, 30) NOT NULL,
    `achatFactureId` BIGINT NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetAchatLivraison` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `unitegratuit` INTEGER NOT NULL,
    `qteacheter` INTEGER NOT NULL,
    `prixAchatHt` DECIMAL(65, 30) NOT NULL,
    `prixAchatTtc` DECIMAL(65, 30) NOT NULL,
    `remiseAchat` DECIMAL(65, 30) NOT NULL,
    `prixVenteAchatHT` DECIMAL(65, 30) NOT NULL,
    `prixVenteTtc` DECIMAL(65, 30) NOT NULL,
    `mantantHt` DECIMAL(65, 30) NOT NULL,
    `mantantTTC` DECIMAL(65, 30) NOT NULL,
    `tva7` DECIMAL(65, 30) NOT NULL,
    `tva20` DECIMAL(65, 30) NOT NULL,
    `tva14` DECIMAL(65, 30) NOT NULL,
    `tva10` DECIMAL(65, 30) NOT NULL,
    `beneficeDH` DECIMAL(65, 30) NOT NULL,
    `benepourcentage` DECIMAL(65, 30) NOT NULL,
    `achatLivraisonId` BIGINT NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetailBonSortie` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `qteSortie` INTEGER NOT NULL,
    `mntProduit` DECIMAL(65, 30) NOT NULL,
    `total` DECIMAL(65, 30) NOT NULL,
    `bonSortieId` BIGINT NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetBulttinLivraison` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `commission` DECIMAL(65, 30) NOT NULL,
    `commissionFixe` DECIMAL(65, 30) NOT NULL,
    `commsiondh` DECIMAL(65, 30) NOT NULL,
    `mantantcommission` DECIMAL(65, 30) NOT NULL,
    `benDH` DECIMAL(65, 30) NOT NULL,
    `rougenormal` BOOLEAN NOT NULL,
    `bulttinPaiId` BIGINT NOT NULL,
    `livraisonId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetBulttinPai` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `prixlivraison` DECIMAL(65, 30) NOT NULL,
    `qtevendu` INTEGER NOT NULL,
    `prixvente` DECIMAL(65, 30) NOT NULL,
    `remise` DECIMAL(65, 30) NOT NULL,
    `mantantvendu` DECIMAL(65, 30) NOT NULL,
    `commission` DECIMAL(65, 30) NOT NULL,
    `commsiondh` DECIMAL(65, 30) NOT NULL,
    `mantant` DECIMAL(65, 30) NOT NULL,
    `benDH` DECIMAL(65, 30) NOT NULL,
    `commissionFixe` DECIMAL(65, 30) NOT NULL,
    `prixCommercial` DECIMAL(65, 30) NOT NULL,
    `primeCommercial` DECIMAL(65, 30) NOT NULL,
    `primeProduit` DECIMAL(65, 30) NOT NULL,
    `avecZero` BOOLEAN NOT NULL DEFAULT false,
    `bulttinPaiId` BIGINT NOT NULL,
    `produitId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetFacture` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `qteFacturer` INTEGER NOT NULL,
    `remiseFacture` DECIMAL(65, 30) NOT NULL,
    `prixVente` DECIMAL(65, 30) NOT NULL,
    `montantProduit` DECIMAL(65, 30) NOT NULL,
    `beneficeDH` DECIMAL(65, 30) NOT NULL,
    `benepourcentage` DECIMAL(65, 30) NOT NULL,
    `tva7` DECIMAL(65, 30) NOT NULL,
    `tva20` DECIMAL(65, 30) NOT NULL,
    `montantProduitHT` DECIMAL(65, 30) NOT NULL,
    `directFacture` INTEGER NOT NULL,
    `avecRemise` BOOLEAN NOT NULL,
    `factureId` BIGINT NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetImportations` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `qteAchat` INTEGER NOT NULL,
    `qteStock` INTEGER NOT NULL,
    `prixAchat` DECIMAL(65, 30) NOT NULL,
    `improtationsId` BIGINT NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetLivraison` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `qteLivrer` INTEGER NOT NULL,
    `champsRouge` INTEGER NOT NULL,
    `remiseLivraison` DECIMAL(65, 30) NOT NULL,
    `prixVente` DECIMAL(65, 30) NOT NULL,
    `montantProduit` DECIMAL(65, 30) NOT NULL,
    `beneficeDH` DECIMAL(65, 30) NOT NULL,
    `benepourcentage` DECIMAL(65, 30) NOT NULL,
    `infinity` INTEGER NOT NULL,
    `avecRemise` BOOLEAN NOT NULL,
    `livraisonId` BIGINT NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Facture` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `numFacture` INTEGER NOT NULL,
    `codeBF` VARCHAR(191) NOT NULL,
    `dateBF` DATE NOT NULL,
    `dateReglement` DATE NOT NULL,
    `dateReglement2` DATE NOT NULL,
    `dateReglement3` DATE NOT NULL,
    `dateReglement4` DATE NOT NULL,
    `typeReglment` INTEGER NOT NULL,
    `typeReglment2` INTEGER NOT NULL,
    `typeReglment3` INTEGER NOT NULL,
    `typeReglment4` INTEGER NOT NULL,
    `typePaiement` VARCHAR(191) NOT NULL,
    `mantantBF` DECIMAL(65, 30) NOT NULL,
    `mantantBFBenefice` DECIMAL(65, 30) NOT NULL,
    `tva7Total` DECIMAL(65, 30) NOT NULL,
    `tva20Total` DECIMAL(65, 30) NOT NULL,
    `sysDate` DATETIME(3) NOT NULL,
    `mantantBFHT` DECIMAL(65, 30) NOT NULL,
    `numeroLibil` VARCHAR(191) NOT NULL,
    `mntHT2O` DECIMAL(65, 30) NOT NULL,
    `mntHT7` DECIMAL(65, 30) NOT NULL,
    `tva7` DECIMAL(65, 30) NOT NULL,
    `tva20` DECIMAL(65, 30) NOT NULL,
    `numCheque` VARCHAR(191) NOT NULL,
    `numCheque2` VARCHAR(191) NOT NULL,
    `numCheque3` VARCHAR(191) NOT NULL,
    `numCheque4` VARCHAR(191) NOT NULL,
    `numRemise` VARCHAR(191) NOT NULL,
    `numRemise2` VARCHAR(191) NOT NULL,
    `numRemise3` VARCHAR(191) NOT NULL,
    `numRemise4` VARCHAR(191) NOT NULL,
    `mntReglement` DECIMAL(65, 30) NOT NULL,
    `mntReglement2` DECIMAL(65, 30) NOT NULL,
    `mntReglement3` DECIMAL(65, 30) NOT NULL,
    `mntReglement4` DECIMAL(65, 30) NOT NULL,
    `type` INTEGER NOT NULL,
    `facturer100` BOOLEAN NOT NULL DEFAULT false,
    `calculer` BOOLEAN NOT NULL DEFAULT false,
    `disableMontant` BOOLEAN NOT NULL DEFAULT false,
    `typeTVA` VARCHAR(191) NOT NULL,
    `dateReglementIn` BOOLEAN NULL DEFAULT false,
    `dateReglement2In` BOOLEAN NULL DEFAULT false,
    `dateReglement3In` BOOLEAN NULL DEFAULT false,
    `dateReglement4In` BOOLEAN NULL DEFAULT false,
    `tva20Reglement1` DECIMAL(65, 30) NOT NULL,
    `tva20Reglement2` DECIMAL(65, 30) NOT NULL,
    `tva20Reglement3` DECIMAL(65, 30) NOT NULL,
    `tva20Reglement4` DECIMAL(65, 30) NOT NULL,
    `mntHT20Reglement1` DECIMAL(65, 30) NOT NULL,
    `mntHT20Reglement2` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Improtations` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `codeFacture` VARCHAR(191) NOT NULL,
    `devisEuroDolar` VARCHAR(191) NOT NULL,
    `numFacture` INTEGER NOT NULL,
    `dateFacture` DATE NOT NULL,
    `sysDate` DATETIME(3) NOT NULL,
    `dateAvances1` DATE NOT NULL,
    `mantantAvancs1` DECIMAL(65, 30) NOT NULL,
    `dateAvances2` DATE NOT NULL,
    `mantantAvancs2` DECIMAL(65, 30) NOT NULL,
    `totalPaye` DECIMAL(65, 30) NOT NULL,
    `mntFacture` DECIMAL(65, 30) NOT NULL,
    `mntDouane` DECIMAL(65, 30) NOT NULL,
    `mntTransport` DECIMAL(65, 30) NOT NULL,
    `mntTransportIntern` DECIMAL(65, 30) NOT NULL,
    `mntTransit` DECIMAL(65, 30) NOT NULL,
    `mntMagasinage` DECIMAL(65, 30) NOT NULL,
    `prixAchatDetaille` DECIMAL(65, 30) NOT NULL,
    `totalAllMnt` DECIMAL(65, 30) NOT NULL,
    `repertoireFourId` BIGINT NOT NULL,
    `employeOperateurId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Livraison` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `numLivraison` INTEGER NOT NULL,
    `codeBl` VARCHAR(191) NOT NULL,
    `dateBl` DATE NOT NULL,
    `dateReglement` DATE NOT NULL,
    `dateReglement2` DATE NOT NULL,
    `dateReglement3` DATE NOT NULL,
    `dateReglement4` DATE NOT NULL,
    `typeReglment` INTEGER NOT NULL,
    `typeReglment2` INTEGER NOT NULL,
    `typeReglment3` INTEGER NOT NULL,
    `typeReglment4` INTEGER NOT NULL,
    `mantantBL` DECIMAL(65, 30) NOT NULL,
    `mantantBLReel` DECIMAL(65, 30) NOT NULL,
    `mantantBLBenefice` DECIMAL(65, 30) NOT NULL,
    `typePaiement` VARCHAR(191) NOT NULL,
    `mantantBLPourcent` DECIMAL(65, 30) NOT NULL,
    `reglerNonRegler` INTEGER NOT NULL,
    `sysDate` DATETIME(3) NOT NULL,
    `infinity` INTEGER NOT NULL,
    `etatBultinPaie` INTEGER NOT NULL,
    `livrernonlivrer` INTEGER NOT NULL,
    `avecRemise` BOOLEAN NOT NULL,
    `mntReglement` DECIMAL(65, 30) NOT NULL,
    `mntReglement2` DECIMAL(65, 30) NOT NULL,
    `mntReglement3` DECIMAL(65, 30) NOT NULL,
    `mntReglement4` DECIMAL(65, 30) NOT NULL,
    `facturer100` BOOLEAN NOT NULL DEFAULT false,
    `codeTransport` VARCHAR(191) NOT NULL,
    `employeOperateurId` BIGINT NOT NULL,
    `repertoireByCommercialId` BIGINT NOT NULL,
    `repertoireByCommercialAncienId` BIGINT NOT NULL,
    `repertoireByClientId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlanComptable` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `code` INTEGER NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `nature` VARCHAR(191) NOT NULL,
    `formule` VARCHAR(191) NOT NULL,
    `codeString` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solde` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dateOperation` DATE NOT NULL,
    `dateReglement` DATE NOT NULL,
    `debit` DECIMAL(65, 30) NOT NULL,
    `credit` DECIMAL(65, 30) NOT NULL,
    `solde` DECIMAL(65, 30) NOT NULL,
    `nature` VARCHAR(191) NOT NULL,
    `planComptableId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ville` ADD CONSTRAINT `Ville_paysId_fkey` FOREIGN KEY (`paysId`) REFERENCES `Pays`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etablissement` ADD CONSTRAINT `Etablissement_villeId_fkey` FOREIGN KEY (`villeId`) REFERENCES `Ville`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ParamPrimeProduit` ADD CONSTRAINT `ParamPrimeProduit_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Repertoire` ADD CONSTRAINT `Repertoire_repertoireId_fkey` FOREIGN KEY (`repertoireId`) REFERENCES `Repertoire`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Repertoire` ADD CONSTRAINT `Repertoire_villeId_fkey` FOREIGN KEY (`villeId`) REFERENCES `Ville`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_repertoireId_fkey` FOREIGN KEY (`repertoireId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employe` ADD CONSTRAINT `Employe_repertoireId_fkey` FOREIGN KEY (`repertoireId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_employeOperationId_fkey` FOREIGN KEY (`employeOperationId`) REFERENCES `Employe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_repertoireId_fkey` FOREIGN KEY (`repertoireId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Balance` ADD CONSTRAINT `Balance_planComptableId_fkey` FOREIGN KEY (`planComptableId`) REFERENCES `PlanComptable`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BonSortie` ADD CONSTRAINT `BonSortie_employeId_fkey` FOREIGN KEY (`employeId`) REFERENCES `Employe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BonSortie` ADD CONSTRAINT `BonSortie_repertoireId_fkey` FOREIGN KEY (`repertoireId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulttinPai` ADD CONSTRAINT `BulttinPai_commercailId_fkey` FOREIGN KEY (`commercailId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulttinPai` ADD CONSTRAINT `BulttinPai_employeOperateurId_fkey` FOREIGN KEY (`employeOperateurId`) REFERENCES `Employe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cheque` ADD CONSTRAINT `Cheque_repertoireId_fkey` FOREIGN KEY (`repertoireId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cheque` ADD CONSTRAINT `Cheque_employeOperateurId_fkey` FOREIGN KEY (`employeOperateurId`) REFERENCES `Employe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compta` ADD CONSTRAINT `Compta_repertoireId_fkey` FOREIGN KEY (`repertoireId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comptabilite` ADD CONSTRAINT `Comptabilite_repertoireId_fkey` FOREIGN KEY (`repertoireId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comptabilite` ADD CONSTRAINT `Comptabilite_employeOperateurId_fkey` FOREIGN KEY (`employeOperateurId`) REFERENCES `Employe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetAchatFacture` ADD CONSTRAINT `DetAchatFacture_achatFactureId_fkey` FOREIGN KEY (`achatFactureId`) REFERENCES `AchatFacture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetAchatFacture` ADD CONSTRAINT `DetAchatFacture_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetAchatLivraison` ADD CONSTRAINT `DetAchatLivraison_achatLivraisonId_fkey` FOREIGN KEY (`achatLivraisonId`) REFERENCES `AchatLivraison`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetAchatLivraison` ADD CONSTRAINT `DetAchatLivraison_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetailBonSortie` ADD CONSTRAINT `DetailBonSortie_bonSortieId_fkey` FOREIGN KEY (`bonSortieId`) REFERENCES `BonSortie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetailBonSortie` ADD CONSTRAINT `DetailBonSortie_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetBulttinLivraison` ADD CONSTRAINT `DetBulttinLivraison_bulttinPaiId_fkey` FOREIGN KEY (`bulttinPaiId`) REFERENCES `BulttinPai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetBulttinLivraison` ADD CONSTRAINT `DetBulttinLivraison_livraisonId_fkey` FOREIGN KEY (`livraisonId`) REFERENCES `Livraison`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetBulttinPai` ADD CONSTRAINT `DetBulttinPai_bulttinPaiId_fkey` FOREIGN KEY (`bulttinPaiId`) REFERENCES `BulttinPai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetBulttinPai` ADD CONSTRAINT `DetBulttinPai_produitId_fkey` FOREIGN KEY (`produitId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetFacture` ADD CONSTRAINT `DetFacture_factureId_fkey` FOREIGN KEY (`factureId`) REFERENCES `Facture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetFacture` ADD CONSTRAINT `DetFacture_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetImportations` ADD CONSTRAINT `DetImportations_improtationsId_fkey` FOREIGN KEY (`improtationsId`) REFERENCES `Improtations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetImportations` ADD CONSTRAINT `DetImportations_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetLivraison` ADD CONSTRAINT `DetLivraison_livraisonId_fkey` FOREIGN KEY (`livraisonId`) REFERENCES `Livraison`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetLivraison` ADD CONSTRAINT `DetLivraison_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Improtations` ADD CONSTRAINT `Improtations_repertoireFourId_fkey` FOREIGN KEY (`repertoireFourId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Improtations` ADD CONSTRAINT `Improtations_employeOperateurId_fkey` FOREIGN KEY (`employeOperateurId`) REFERENCES `Employe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Livraison` ADD CONSTRAINT `Livraison_employeOperateurId_fkey` FOREIGN KEY (`employeOperateurId`) REFERENCES `Employe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Livraison` ADD CONSTRAINT `Livraison_repertoireByCommercialId_fkey` FOREIGN KEY (`repertoireByCommercialId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Livraison` ADD CONSTRAINT `Livraison_repertoireByCommercialAncienId_fkey` FOREIGN KEY (`repertoireByCommercialAncienId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Livraison` ADD CONSTRAINT `Livraison_repertoireByClientId_fkey` FOREIGN KEY (`repertoireByClientId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Solde` ADD CONSTRAINT `Solde_planComptableId_fkey` FOREIGN KEY (`planComptableId`) REFERENCES `PlanComptable`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
