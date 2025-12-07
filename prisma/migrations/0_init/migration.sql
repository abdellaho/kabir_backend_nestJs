-- CreateTable
CREATE TABLE `Ville` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nomVille` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fournisseur` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `designation` VARCHAR(191) NOT NULL,
    `type` INTEGER NOT NULL,
    `tel1` VARCHAR(191) NOT NULL,
    `tel2` VARCHAR(191) NOT NULL,
    `ice` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `dateSuppression` DATE NULL,
    `archiver` BOOLEAN NOT NULL DEFAULT false,
    `supprimer` BOOLEAN NOT NULL DEFAULT false,
    `villeId` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Personnel` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `designation` VARCHAR(191) NOT NULL,
    `cin` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `typePersonnel` INTEGER NOT NULL,
    `etatComptePersonnel` BOOLEAN NOT NULL DEFAULT false,
    `tel1` VARCHAR(191) NOT NULL,
    `tel2` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dateEntrer` DATE NOT NULL,
    `dateSuppression` DATE NULL,
    `salaire` DECIMAL(10, 2) NOT NULL,
    `archiver` BOOLEAN NOT NULL DEFAULT false,
    `supprimer` BOOLEAN NOT NULL DEFAULT false,
    `consulterStock` BOOLEAN NOT NULL DEFAULT false,
    `ajouterStock` BOOLEAN NOT NULL DEFAULT false,
    `modifierStock` BOOLEAN NOT NULL DEFAULT false,
    `supprimerStock` BOOLEAN NOT NULL DEFAULT false,
    `consulterRepertoire` BOOLEAN NOT NULL DEFAULT false,
    `ajouterRepertoire` BOOLEAN NOT NULL DEFAULT false,
    `modifierRepertoire` BOOLEAN NOT NULL DEFAULT false,
    `supprimerRepertoire` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Voiture` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `numVoiture` VARCHAR(191) NOT NULL,
    `kmMax` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Etablissement` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `cheminBD` VARCHAR(191) NOT NULL,
    `tel1` VARCHAR(191) NOT NULL,
    `tel2` VARCHAR(191) NOT NULL,
    `tel3` VARCHAR(191) NOT NULL,
    `fax` VARCHAR(191) NOT NULL,
    `gsm` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `siteweb` VARCHAR(191) NOT NULL,
    `cnss` VARCHAR(191) NOT NULL,
    `patente` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `raisonSocial` VARCHAR(191) NOT NULL,
    `ice` VARCHAR(191) NOT NULL,
    `ife` VARCHAR(191) NOT NULL,
    `rc` VARCHAR(191) NOT NULL,
    `port` INTEGER NOT NULL,
    `hostMail` VARCHAR(191) NOT NULL,
    `paswordMail` VARCHAR(191) NOT NULL,
    `paswordMailFake` VARCHAR(191) NOT NULL,
    `fromMail` VARCHAR(191) NOT NULL,
    `userMail` VARCHAR(191) NOT NULL,
    `capitale` INTEGER NOT NULL,
    `pourcentageLiv` DECIMAL(10, 2) NOT NULL,
    `lienDbDump` VARCHAR(191) NOT NULL,
    `lienBackupDB` VARCHAR(191) NOT NULL,
    `lundi` BOOLEAN NOT NULL DEFAULT false,
    `mardi` BOOLEAN NOT NULL DEFAULT false,
    `mercredi` BOOLEAN NOT NULL DEFAULT false,
    `jeudi` BOOLEAN NOT NULL DEFAULT false,
    `vendredi` BOOLEAN NOT NULL DEFAULT false,
    `samedi` BOOLEAN NOT NULL DEFAULT false,
    `dimanche` BOOLEAN NOT NULL DEFAULT false,
    `dateTime` DATETIME(3) NOT NULL,
    `typeExec` INTEGER NOT NULL,
    `numJour` INTEGER NOT NULL,
    `villeId` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prime` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `montant` DECIMAL(10, 2) NOT NULL,
    `prime` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ParamCommiss` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `mntDepart` DECIMAL(10, 2) NOT NULL,
    `mntFin` DECIMAL(10, 2) NOT NULL,
    `pourc` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Repertoire` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `designation` VARCHAR(191) NOT NULL,
    `tel1` VARCHAR(191) NOT NULL,
    `tel2` VARCHAR(191) NOT NULL,
    `tel3` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `typeRepertoire` INTEGER NOT NULL,
    `typeReglment` INTEGER NOT NULL,
    `ife` VARCHAR(191) NOT NULL,
    `ice` VARCHAR(191) NOT NULL,
    `archiver` BOOLEAN NOT NULL DEFAULT false,
    `bloquer` BOOLEAN NOT NULL DEFAULT false,
    `sysDate` DATETIME(3) NOT NULL,
    `dateSuppression` DATE NULL,
    `observation` VARCHAR(191) NOT NULL,
    `nbrOperationClient` INTEGER NOT NULL,
    `plafond` DECIMAL(10, 2) NOT NULL,
    `personnelId` BIGINT NULL,
    `villeId` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stock` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `designation` VARCHAR(191) NOT NULL,
    `sysDate` DATETIME(3) NOT NULL,
    `pahtGrossiste` DECIMAL(10, 2) NOT NULL,
    `prixCommercial` DECIMAL(10, 2) NOT NULL,
    `tva` DECIMAL(10, 2) NOT NULL,
    `pattc` DECIMAL(10, 2) NOT NULL,
    `pvttc` DECIMAL(10, 2) NOT NULL,
    `pvaht` DECIMAL(10, 2) NOT NULL,
    `benifice` DECIMAL(10, 2) NOT NULL,
    `qteStock` INTEGER NOT NULL,
    `qtePVMin1` INTEGER NOT NULL,
    `qtePVMin2` INTEGER NOT NULL,
    `qtePVMin3` INTEGER NOT NULL,
    `qtePVMin4` INTEGER NOT NULL,
    `qteFacturer` INTEGER NOT NULL,
    `prixVentMin1` DECIMAL(10, 2) NOT NULL,
    `prixVentMin2` DECIMAL(10, 2) NOT NULL,
    `prixVentMin3` DECIMAL(10, 2) NOT NULL,
    `prixVentMin4` DECIMAL(10, 2) NOT NULL,
    `remiseMax1` DECIMAL(10, 2) NOT NULL,
    `remiseMax2` DECIMAL(10, 2) NOT NULL,
    `remiseMax3` DECIMAL(10, 2) NOT NULL,
    `remiseMax4` DECIMAL(10, 2) NOT NULL,
    `prixImport` DECIMAL(10, 2) NOT NULL,
    `commission` DECIMAL(10, 2) NOT NULL,
    `archiver` BOOLEAN NOT NULL DEFAULT false,
    `supprimer` BOOLEAN NOT NULL DEFAULT false,
    `qteStockImport` INTEGER NOT NULL,
    `montant1` DECIMAL(10, 2) NOT NULL,
    `montant2` DECIMAL(10, 2) NOT NULL,
    `montant3` DECIMAL(10, 2) NOT NULL,
    `prime1` DECIMAL(10, 2) NOT NULL,
    `prime2` DECIMAL(10, 2) NOT NULL,
    `prime3` DECIMAL(10, 2) NOT NULL,
    `dateSuppression` DATE NULL,
    `fournisseurId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StockDepot` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `qteStockDepot` INTEGER NOT NULL,
    `dateOperation` DATE NOT NULL,
    `dateSys` DATETIME(3) NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employe` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `numEmp` INTEGER NOT NULL,
    `livrerNonLivrerDroit` INTEGER NOT NULL,
    `codeEmp` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `motpass` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `typeUser` INTEGER NOT NULL,
    `etatCompte` BOOLEAN NOT NULL DEFAULT false,
    `validationMnt` DECIMAL(10, 2) NOT NULL,
    `motPassFake` VARCHAR(191) NOT NULL,
    `commercial` BOOLEAN NOT NULL DEFAULT false,
    `pvLibre` BOOLEAN NOT NULL DEFAULT false,
    `gerant` BOOLEAN NOT NULL DEFAULT false,
    `magasinier` BOOLEAN NOT NULL DEFAULT false,
    `bulltinPaie` BOOLEAN NOT NULL DEFAULT false,
    `imprimStockSimple` BOOLEAN NOT NULL DEFAULT false,
    `livraisonLimite` BOOLEAN NOT NULL DEFAULT false,
    `repertoireId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Droit` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `listRepertoire` BOOLEAN NOT NULL DEFAULT false,
    `listStock` BOOLEAN NOT NULL DEFAULT false,
    `listLivraison` BOOLEAN NOT NULL DEFAULT false,
    `listFacture` BOOLEAN NOT NULL DEFAULT false,
    `listAchatLivraison` BOOLEAN NOT NULL DEFAULT false,
    `listAchatFacture` BOOLEAN NOT NULL DEFAULT false,
    `listAchatLivraisonEtranger` BOOLEAN NOT NULL DEFAULT false,
    `ajouterRepertoire` BOOLEAN NOT NULL DEFAULT false,
    `ajouterStock` BOOLEAN NOT NULL DEFAULT false,
    `ajouterLivraison` BOOLEAN NOT NULL DEFAULT false,
    `ajouterFacture` BOOLEAN NOT NULL DEFAULT false,
    `ajouterAchatLivraison` BOOLEAN NOT NULL DEFAULT false,
    `ajouterAchatFacture` BOOLEAN NOT NULL DEFAULT false,
    `ajouterAchatLivraisonEtranger` BOOLEAN NOT NULL DEFAULT false,
    `modifRepertoire` BOOLEAN NOT NULL DEFAULT false,
    `modifStock` BOOLEAN NOT NULL DEFAULT false,
    `modifLivraison` BOOLEAN NOT NULL DEFAULT false,
    `modifFacture` BOOLEAN NOT NULL DEFAULT false,
    `modifAchatLivraison` BOOLEAN NOT NULL DEFAULT false,
    `modifAchatFacture` BOOLEAN NOT NULL DEFAULT false,
    `modifAchatLivraisonEtranger` BOOLEAN NOT NULL DEFAULT false,
    `suppRepertoire` BOOLEAN NOT NULL DEFAULT false,
    `suppStock` BOOLEAN NOT NULL DEFAULT false,
    `suppLivraison` BOOLEAN NOT NULL DEFAULT false,
    `suppFacture` BOOLEAN NOT NULL DEFAULT false,
    `suppAchatLivraison` BOOLEAN NOT NULL DEFAULT false,
    `suppAchatFacture` BOOLEAN NOT NULL DEFAULT false,
    `suppAchatLivraisonEtranger` BOOLEAN NOT NULL DEFAULT false,
    `etatRepertoire` BOOLEAN NOT NULL DEFAULT false,
    `etatStock` BOOLEAN NOT NULL DEFAULT false,
    `etatLivraison` BOOLEAN NOT NULL DEFAULT false,
    `etatFacture` BOOLEAN NOT NULL DEFAULT false,
    `etatAchatLivraison` BOOLEAN NOT NULL DEFAULT false,
    `etatAchatFacture` BOOLEAN NOT NULL DEFAULT false,
    `etatAchatLivraisonEtranger` BOOLEAN NOT NULL DEFAULT false,
    `imprimeRepertoire` BOOLEAN NOT NULL DEFAULT false,
    `imprimeStock` BOOLEAN NOT NULL DEFAULT false,
    `imprimeLivraison` BOOLEAN NOT NULL DEFAULT false,
    `imprimeFacture` BOOLEAN NOT NULL DEFAULT false,
    `imprimerAchatLivraison` BOOLEAN NOT NULL DEFAULT false,
    `imprimerAchatFacture` BOOLEAN NOT NULL DEFAULT false,
    `imprimerAchatLivraisonEtranger` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Absence` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `dateAbsence` DATE NOT NULL,
    `matin` BOOLEAN NOT NULL DEFAULT false,
    `apresMidi` BOOLEAN NOT NULL DEFAULT false,
    `dateOperation` DATETIME(3) NOT NULL,
    `personnelOperationId` BIGINT NULL,
    `personnelId` BIGINT NOT NULL,

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
    `mantantAvancs` DECIMAL(10, 2) NOT NULL,
    `prixNormalAchatHt` INTEGER NOT NULL,
    `numeroFacExterne` VARCHAR(191) NOT NULL,
    `numeroIF` VARCHAR(191) NOT NULL,
    `mantantAF` DECIMAL(10, 2) NOT NULL,
    `mantantBFBenefice` DECIMAL(10, 2) NOT NULL,
    `montantNonTaxable` DECIMAL(10, 2) NOT NULL,
    `dateReglement` DATE NOT NULL,
    `typeReglment` INTEGER NOT NULL,
    `typePaiement` VARCHAR(191) NOT NULL,
    `numCheque` VARCHAR(191) NOT NULL,
    `mantantTotHT` DECIMAL(10, 2) NOT NULL,
    `mantantTotHTVA` DECIMAL(10, 2) NOT NULL,
    `mantantTotTTC` DECIMAL(10, 2) NOT NULL,
    `tva20` DECIMAL(10, 2) NOT NULL,
    `tva7` DECIMAL(10, 2) NOT NULL,
    `tvaArbtraire` DECIMAL(10, 2) NOT NULL,
    `manuelAutoMatique` INTEGER NOT NULL,
    `mntManuelTva7` DECIMAL(10, 2) NOT NULL,
    `mntManuelTva10` DECIMAL(10, 2) NOT NULL,
    `mntManuelTva12` DECIMAL(10, 2) NOT NULL,
    `mntManuelTva13` DECIMAL(10, 2) NOT NULL,
    `mntManuelTva14` DECIMAL(10, 2) NOT NULL,
    `mntManuelTva20` DECIMAL(10, 2) NOT NULL,
    `montantTVA7` DECIMAL(10, 2) NOT NULL,
    `montantTVA10` DECIMAL(10, 2) NOT NULL,
    `montantTVA12` DECIMAL(10, 2) NOT NULL,
    `montantTVA13` DECIMAL(10, 2) NOT NULL,
    `montantTVA14` DECIMAL(10, 2) NOT NULL,
    `montantTVA20` DECIMAL(10, 2) NOT NULL,
    `mntHtTVA7` DECIMAL(10, 2) NOT NULL,
    `mntHtTVA10` DECIMAL(10, 2) NOT NULL,
    `mntHtTVA12` DECIMAL(10, 2) NOT NULL,
    `mntHtTVA13` DECIMAL(10, 2) NOT NULL,
    `mntHtTVA14` DECIMAL(10, 2) NOT NULL,
    `mntHtTVA20` DECIMAL(10, 2) NOT NULL,
    `mntTtcTVA7` DECIMAL(10, 2) NOT NULL,
    `mntTtcTVA10` DECIMAL(10, 2) NOT NULL,
    `mntTtcTVA12` DECIMAL(10, 2) NOT NULL,
    `mntTtcTVA13` DECIMAL(10, 2) NOT NULL,
    `mntTtcTVA14` DECIMAL(10, 2) NOT NULL,
    `mntTtcTVA20` DECIMAL(10, 2) NOT NULL,
    `mntTtc` DECIMAL(10, 2) NOT NULL,
    `montantDroitSupplementaire` DECIMAL(10, 2) NOT NULL,
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
    `mantantAL` DECIMAL(10, 2) NOT NULL,
    `mantantALTTC` DECIMAL(10, 2) NOT NULL,
    `mantantALTVA20` DECIMAL(10, 2) NOT NULL,
    `mantantALTVA7` DECIMAL(10, 2) NOT NULL,
    `totalMantantALTVA` DECIMAL(10, 2) NOT NULL,
    `mantantBFBenefice` DECIMAL(10, 2) NOT NULL,
    `montantTVA7` DECIMAL(10, 2) NOT NULL,
    `montantTVA10` DECIMAL(10, 2) NOT NULL,
    `montantTVA14` DECIMAL(10, 2) NOT NULL,
    `montantTVA20` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Balance` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `dateBalance` DATE NOT NULL,
    `nature` VARCHAR(191) NOT NULL,
    `debitPrec` DECIMAL(10, 2) NOT NULL,
    `creditPrec` DECIMAL(10, 2) NOT NULL,
    `debit` DECIMAL(10, 2) NOT NULL,
    `credit` DECIMAL(10, 2) NOT NULL,
    `soldeDebiteur` DECIMAL(10, 2) NOT NULL,
    `soldeCrediteur` DECIMAL(10, 2) NOT NULL,
    `planComptableId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bilan` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `date1` DATE NOT NULL,
    `date2` DATE NOT NULL,
    `stock` DECIMAL(10, 2) NOT NULL,
    `banque` DECIMAL(10, 2) NOT NULL,
    `caisse1` DECIMAL(10, 2) NOT NULL,
    `caisse2` DECIMAL(10, 2) NOT NULL,
    `actifDivers` DECIMAL(10, 2) NOT NULL,
    `capital` DECIMAL(10, 2) NOT NULL,
    `dgi` DECIMAL(10, 2) NOT NULL,
    `cnss` DECIMAL(10, 2) NOT NULL,
    `loyer` DECIMAL(10, 2) NOT NULL,
    `salaire` DECIMAL(10, 2) NOT NULL,
    `tva` DECIMAL(10, 2) NOT NULL,
    `chiffreAffaire` DECIMAL(10, 2) NOT NULL,
    `passifDivers` DECIMAL(10, 2) NOT NULL,
    `compteCourant` DECIMAL(10, 2) NOT NULL,
    `resultatPrecedent` DECIMAL(10, 2) NOT NULL,
    `resultat` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BonSortie` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `numSortie` INTEGER NOT NULL,
    `codeSortie` VARCHAR(191) NOT NULL,
    `dateOperation` DATETIME(3) NOT NULL,
    `mnt` DECIMAL(10, 2) NOT NULL,
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
    `dateOperation` DATETIME(3) NOT NULL,
    `dateDebut` DATE NOT NULL,
    `dateFin` DATE NOT NULL,
    `idTypeBultinPai` INTEGER NOT NULL,
    `salairefx` DECIMAL(10, 2) NOT NULL,
    `commission` DECIMAL(10, 2) NOT NULL,
    `frais` DECIMAL(10, 2) NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `totalMntVendue` DECIMAL(10, 2) NOT NULL,
    `totalMntVendueProduit` DECIMAL(10, 2) NOT NULL,
    `totalMntVendueLivraison` DECIMAL(10, 2) NOT NULL,
    `mntNegative` DECIMAL(10, 2) NOT NULL,
    `mntNegativeProduit` DECIMAL(10, 2) NOT NULL,
    `mntNegativeLivraison` DECIMAL(10, 2) NOT NULL,
    `mntCNSS` DECIMAL(10, 2) NOT NULL,
    `mntPenalite` DECIMAL(10, 2) NOT NULL,
    `mntBenefice` DECIMAL(10, 2) NOT NULL,
    `commissionParProduit` DECIMAL(10, 2) NOT NULL,
    `primeSpecial` DECIMAL(10, 2) NOT NULL,
    `fraisSupp` DECIMAL(10, 2) NOT NULL,
    `primeCommercial` DECIMAL(10, 2) NOT NULL,
    `externe` BOOLEAN NOT NULL,
    `totalMntVenduePrixCommercial` DECIMAL(10, 2) NOT NULL,
    `totalMntVendueSansPrixCommercial` DECIMAL(10, 2) NOT NULL,
    `primeProduit` DECIMAL(10, 2) NOT NULL,
    `commercailId` BIGINT NOT NULL,
    `employeOperateurId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Caisse` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `montant` DECIMAL(10, 2) NOT NULL,
    `dateOperation` DATETIME(3) NOT NULL,
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
    `montant` DECIMAL(10, 2) NOT NULL,
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
    `montantTVAPrecedent` DECIMAL(10, 2) NOT NULL,
    `montantTVAAchat` DECIMAL(10, 2) NOT NULL,
    `montantTVAVente` DECIMAL(10, 2) NOT NULL,
    `resutMnt` DECIMAL(10, 2) NOT NULL,
    `repertoireId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comptabilite` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `montantTTC` DECIMAL(10, 2) NOT NULL,
    `montantTVA` DECIMAL(10, 2) NOT NULL,
    `montantTVA0` DECIMAL(10, 2) NOT NULL,
    `montantTVA7` DECIMAL(10, 2) NOT NULL,
    `montantTVA10` DECIMAL(10, 2) NOT NULL,
    `montantTVA14` DECIMAL(10, 2) NOT NULL,
    `montantTVA20` DECIMAL(10, 2) NOT NULL,
    `montantHT` DECIMAL(10, 2) NOT NULL,
    `montantHT7` DECIMAL(10, 2) NOT NULL,
    `montantHT10` DECIMAL(10, 2) NOT NULL,
    `montantHT14` DECIMAL(10, 2) NOT NULL,
    `montantHT20` DECIMAL(10, 2) NOT NULL,
    `modeReglement` VARCHAR(191) NOT NULL,
    `typeManuelAuto` INTEGER NOT NULL,
    `typeReglement` INTEGER NOT NULL,
    `dateFacture` DATE NOT NULL,
    `dateRegelement` DATE NOT NULL,
    `numFcture` VARCHAR(191) NOT NULL,
    `montantDroitSupplementaire` DECIMAL(10, 2) NOT NULL,
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
    `montant` DECIMAL(10, 2) NOT NULL,
    `compteCaisse` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetAchatFacture` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `unitegratuit` INTEGER NOT NULL,
    `qteacheter` INTEGER NOT NULL,
    `prixAchatHt` DECIMAL(10, 2) NOT NULL,
    `prixAchatTtc` DECIMAL(10, 2) NOT NULL,
    `remiseAchat` DECIMAL(10, 2) NOT NULL,
    `prixVenteTtc` DECIMAL(10, 2) NOT NULL,
    `mantantHt` DECIMAL(10, 2) NOT NULL,
    `mantantTTC` DECIMAL(10, 2) NOT NULL,
    `prixVenteAchatHT` DECIMAL(10, 2) NOT NULL,
    `beneficeDH` DECIMAL(10, 2) NOT NULL,
    `benepourcentage` DECIMAL(10, 2) NOT NULL,
    `tva20` DECIMAL(10, 2) NOT NULL,
    `tva7` DECIMAL(10, 2) NOT NULL,
    `achatFactureId` BIGINT NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetAchatLivraison` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `unitegratuit` INTEGER NOT NULL,
    `qteacheter` INTEGER NOT NULL,
    `prixAchatHt` DECIMAL(10, 2) NOT NULL,
    `prixAchatTtc` DECIMAL(10, 2) NOT NULL,
    `remiseAchat` DECIMAL(10, 2) NOT NULL,
    `prixVenteAchatHT` DECIMAL(10, 2) NOT NULL,
    `prixVenteTtc` DECIMAL(10, 2) NOT NULL,
    `mantantHt` DECIMAL(10, 2) NOT NULL,
    `mantantTTC` DECIMAL(10, 2) NOT NULL,
    `tva7` DECIMAL(10, 2) NOT NULL,
    `tva20` DECIMAL(10, 2) NOT NULL,
    `tva14` DECIMAL(10, 2) NOT NULL,
    `tva10` DECIMAL(10, 2) NOT NULL,
    `beneficeDH` DECIMAL(10, 2) NOT NULL,
    `benepourcentage` DECIMAL(10, 2) NOT NULL,
    `achatLivraisonId` BIGINT NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetailBonSortie` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `qteSortie` INTEGER NOT NULL,
    `mntProduit` DECIMAL(10, 2) NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `bonSortieId` BIGINT NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetBulttinLivraison` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `commission` DECIMAL(10, 2) NOT NULL,
    `commissionFixe` DECIMAL(10, 2) NOT NULL,
    `commsiondh` DECIMAL(10, 2) NOT NULL,
    `mantantcommission` DECIMAL(10, 2) NOT NULL,
    `benDH` DECIMAL(10, 2) NOT NULL,
    `rougenormal` BOOLEAN NOT NULL,
    `bulttinPaiId` BIGINT NOT NULL,
    `livraisonId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetBulttinPai` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `prixlivraison` DECIMAL(10, 2) NOT NULL,
    `qtevendu` INTEGER NOT NULL,
    `prixvente` DECIMAL(10, 2) NOT NULL,
    `remise` DECIMAL(10, 2) NOT NULL,
    `mantantvendu` DECIMAL(10, 2) NOT NULL,
    `commission` DECIMAL(10, 2) NOT NULL,
    `commsiondh` DECIMAL(10, 2) NOT NULL,
    `mantant` DECIMAL(10, 2) NOT NULL,
    `benDH` DECIMAL(10, 2) NOT NULL,
    `commissionFixe` DECIMAL(10, 2) NOT NULL,
    `prixCommercial` DECIMAL(10, 2) NOT NULL,
    `primeCommercial` DECIMAL(10, 2) NOT NULL,
    `primeProduit` DECIMAL(10, 2) NOT NULL,
    `avecZero` BOOLEAN NOT NULL DEFAULT false,
    `bulttinPaiId` BIGINT NOT NULL,
    `produitId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetFacture` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `qteFacturer` INTEGER NOT NULL,
    `remiseFacture` DECIMAL(10, 2) NOT NULL,
    `prixVente` DECIMAL(10, 2) NOT NULL,
    `montantProduit` DECIMAL(10, 2) NOT NULL,
    `beneficeDH` DECIMAL(10, 2) NOT NULL,
    `benepourcentage` DECIMAL(10, 2) NOT NULL,
    `tva7` DECIMAL(10, 2) NOT NULL,
    `tva20` DECIMAL(10, 2) NOT NULL,
    `montantProduitHT` DECIMAL(10, 2) NOT NULL,
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
    `prixAchat` DECIMAL(10, 2) NOT NULL,
    `importationsId` BIGINT NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetLivraison` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `qteLivrer` INTEGER NOT NULL,
    `champsRouge` INTEGER NOT NULL,
    `remiseLivraison` DECIMAL(10, 2) NOT NULL,
    `prixVente` DECIMAL(10, 2) NOT NULL,
    `montantProduit` DECIMAL(10, 2) NOT NULL,
    `beneficeDH` DECIMAL(10, 2) NOT NULL,
    `benepourcentage` DECIMAL(10, 2) NOT NULL,
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
    `mantantBF` DECIMAL(10, 2) NOT NULL,
    `mantantBFBenefice` DECIMAL(10, 2) NOT NULL,
    `tva7Total` DECIMAL(10, 2) NOT NULL,
    `tva20Total` DECIMAL(10, 2) NOT NULL,
    `sysDate` DATETIME(3) NOT NULL,
    `mantantBFHT` DECIMAL(10, 2) NOT NULL,
    `numeroLibil` VARCHAR(191) NOT NULL,
    `mntHT2O` DECIMAL(10, 2) NOT NULL,
    `mntHT7` DECIMAL(10, 2) NOT NULL,
    `tva7` DECIMAL(10, 2) NOT NULL,
    `tva20` DECIMAL(10, 2) NOT NULL,
    `numCheque` VARCHAR(191) NOT NULL,
    `numCheque2` VARCHAR(191) NOT NULL,
    `numCheque3` VARCHAR(191) NOT NULL,
    `numCheque4` VARCHAR(191) NOT NULL,
    `numRemise` VARCHAR(191) NOT NULL,
    `numRemise2` VARCHAR(191) NOT NULL,
    `numRemise3` VARCHAR(191) NOT NULL,
    `numRemise4` VARCHAR(191) NOT NULL,
    `mntReglement` DECIMAL(10, 2) NOT NULL,
    `mntReglement2` DECIMAL(10, 2) NOT NULL,
    `mntReglement3` DECIMAL(10, 2) NOT NULL,
    `mntReglement4` DECIMAL(10, 2) NOT NULL,
    `type` INTEGER NOT NULL,
    `facturer100` BOOLEAN NOT NULL DEFAULT false,
    `calculer` BOOLEAN NOT NULL DEFAULT false,
    `disableMontant` BOOLEAN NOT NULL DEFAULT false,
    `typeTVA` VARCHAR(191) NOT NULL,
    `dateReglementIn` BOOLEAN NULL DEFAULT false,
    `dateReglement2In` BOOLEAN NULL DEFAULT false,
    `dateReglement3In` BOOLEAN NULL DEFAULT false,
    `dateReglement4In` BOOLEAN NULL DEFAULT false,
    `tva20Reglement1` DECIMAL(10, 2) NOT NULL,
    `tva20Reglement2` DECIMAL(10, 2) NOT NULL,
    `tva20Reglement3` DECIMAL(10, 2) NOT NULL,
    `tva20Reglement4` DECIMAL(10, 2) NOT NULL,
    `mntHT20Reglement1` DECIMAL(10, 2) NOT NULL,
    `mntHT20Reglement2` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Importations` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `codeFacture` VARCHAR(191) NOT NULL,
    `devisEuroDolar` VARCHAR(191) NOT NULL,
    `numFacture` INTEGER NOT NULL,
    `dateFacture` DATE NOT NULL,
    `sysDate` DATETIME(3) NOT NULL,
    `dateAvances1` DATE NOT NULL,
    `mantantAvancs1` DECIMAL(10, 2) NOT NULL,
    `dateAvances2` DATE NOT NULL,
    `mantantAvancs2` DECIMAL(10, 2) NOT NULL,
    `totalPaye` DECIMAL(10, 2) NOT NULL,
    `mntFacture` DECIMAL(10, 2) NOT NULL,
    `mntDouane` DECIMAL(10, 2) NOT NULL,
    `mntTransport` DECIMAL(10, 2) NOT NULL,
    `mntTransportIntern` DECIMAL(10, 2) NOT NULL,
    `mntTransit` DECIMAL(10, 2) NOT NULL,
    `mntMagasinage` DECIMAL(10, 2) NOT NULL,
    `prixAchatDetaille` DECIMAL(10, 2) NOT NULL,
    `totalAllMnt` DECIMAL(10, 2) NOT NULL,
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
    `mantantBL` DECIMAL(10, 2) NOT NULL,
    `mantantBLReel` DECIMAL(10, 2) NOT NULL,
    `mantantBLBenefice` DECIMAL(10, 2) NOT NULL,
    `typePaiement` VARCHAR(191) NOT NULL,
    `mantantBLPourcent` DECIMAL(10, 2) NOT NULL,
    `reglerNonRegler` INTEGER NOT NULL,
    `sysDate` DATETIME(3) NOT NULL,
    `infinity` INTEGER NOT NULL,
    `etatBultinPaie` INTEGER NOT NULL,
    `livrernonlivrer` INTEGER NOT NULL,
    `avecRemise` BOOLEAN NOT NULL,
    `mntReglement` DECIMAL(10, 2) NOT NULL,
    `mntReglement2` DECIMAL(10, 2) NOT NULL,
    `mntReglement3` DECIMAL(10, 2) NOT NULL,
    `mntReglement4` DECIMAL(10, 2) NOT NULL,
    `facturer100` BOOLEAN NOT NULL DEFAULT false,
    `codeTransport` VARCHAR(191) NOT NULL,
    `employeOperateurId` BIGINT NULL,
    `personnelId` BIGINT NOT NULL,
    `personnelAncienId` BIGINT NULL,
    `fournisseurId` BIGINT NOT NULL,

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
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `dateOperation` DATETIME(3) NOT NULL,
    `dateReglement` DATE NOT NULL,
    `debit` DECIMAL(10, 2) NOT NULL,
    `credit` DECIMAL(10, 2) NOT NULL,
    `solde` DECIMAL(10, 2) NOT NULL,
    `nature` VARCHAR(191) NOT NULL,
    `planComptableId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Fournisseur` ADD CONSTRAINT `Fournisseur_villeId_fkey` FOREIGN KEY (`villeId`) REFERENCES `Ville`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etablissement` ADD CONSTRAINT `Etablissement_villeId_fkey` FOREIGN KEY (`villeId`) REFERENCES `Ville`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Repertoire` ADD CONSTRAINT `Repertoire_personnelId_fkey` FOREIGN KEY (`personnelId`) REFERENCES `Personnel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Repertoire` ADD CONSTRAINT `Repertoire_villeId_fkey` FOREIGN KEY (`villeId`) REFERENCES `Ville`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Stock` ADD CONSTRAINT `Stock_fournisseurId_fkey` FOREIGN KEY (`fournisseurId`) REFERENCES `Fournisseur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StockDepot` ADD CONSTRAINT `StockDepot_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Employe` ADD CONSTRAINT `Employe_repertoireId_fkey` FOREIGN KEY (`repertoireId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_personnelOperationId_fkey` FOREIGN KEY (`personnelOperationId`) REFERENCES `Personnel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Absence` ADD CONSTRAINT `Absence_personnelId_fkey` FOREIGN KEY (`personnelId`) REFERENCES `Personnel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `DetImportations` ADD CONSTRAINT `DetImportations_importationsId_fkey` FOREIGN KEY (`importationsId`) REFERENCES `Importations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetImportations` ADD CONSTRAINT `DetImportations_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetLivraison` ADD CONSTRAINT `DetLivraison_livraisonId_fkey` FOREIGN KEY (`livraisonId`) REFERENCES `Livraison`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetLivraison` ADD CONSTRAINT `DetLivraison_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Importations` ADD CONSTRAINT `Importations_repertoireFourId_fkey` FOREIGN KEY (`repertoireFourId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Importations` ADD CONSTRAINT `Importations_employeOperateurId_fkey` FOREIGN KEY (`employeOperateurId`) REFERENCES `Employe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Livraison` ADD CONSTRAINT `Livraison_employeOperateurId_fkey` FOREIGN KEY (`employeOperateurId`) REFERENCES `Employe`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Livraison` ADD CONSTRAINT `Livraison_personnelId_fkey` FOREIGN KEY (`personnelId`) REFERENCES `Personnel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Livraison` ADD CONSTRAINT `Livraison_personnelAncienId_fkey` FOREIGN KEY (`personnelAncienId`) REFERENCES `Personnel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Livraison` ADD CONSTRAINT `Livraison_fournisseurId_fkey` FOREIGN KEY (`fournisseurId`) REFERENCES `Fournisseur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Solde` ADD CONSTRAINT `Solde_planComptableId_fkey` FOREIGN KEY (`planComptableId`) REFERENCES `PlanComptable`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

