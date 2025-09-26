-- CreateTable
CREATE TABLE `Pays` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pays` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ville` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomVille` VARCHAR(191) NOT NULL,
    `paysId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Etablissement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `cheminBD` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,
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
    `port` INTEGER NOT NULL,
    `hostMail` VARCHAR(191) NOT NULL,
    `paswordMail` VARCHAR(191) NOT NULL,
    `paswordMailFake` VARCHAR(191) NOT NULL,
    `fromMail` VARCHAR(191) NOT NULL,
    `userMail` VARCHAR(191) NOT NULL,
    `capitale` VARCHAR(191) NOT NULL,
    `pourcentageLiv` VARCHAR(191) NOT NULL,
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
    `villeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ParamPrime` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `montant` DECIMAL(65, 30) NOT NULL,
    `prime` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ParamCommiss` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mntDepart` DECIMAL(65, 30) NOT NULL,
    `mntFin` DECIMAL(65, 30) NOT NULL,
    `pourc` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ParamPrimeProduit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `montant` DECIMAL(65, 30) NOT NULL,
    `prime` DECIMAL(65, 30) NOT NULL,
    `stockId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Repertoire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `designation` VARCHAR(191) NOT NULL,
    `contact1` VARCHAR(191) NOT NULL,
    `contact2` VARCHAR(191) NOT NULL,
    `tel1` VARCHAR(191) NOT NULL,
    `tel2` VARCHAR(191) NOT NULL,
    `tel3` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `typeRepertoire` INTEGER NOT NULL,
    `typeReglment` INTEGER NOT NULL,
    `ife` VARCHAR(191) NOT NULL,
    `ice` VARCHAR(191) NOT NULL,
    `archive` INTEGER NOT NULL,
    `sysDate` DATETIME(3) NOT NULL,
    `dateEntrer` DATETIME(3) NOT NULL,
    `dateValidation` DATETIME(3) NOT NULL,
    `observation` VARCHAR(191) NOT NULL,
    `salaireParDefaut` DECIMAL(65, 30) NOT NULL,
    `nbrOperationClient` INTEGER NOT NULL,
    `bloquer` INTEGER NOT NULL,
    `mntCnss` DECIMAL(65, 30) NOT NULL,
    `commercialExterne` BOOLEAN NOT NULL DEFAULT false,
    `contactTel2` VARCHAR(191) NOT NULL,
    `contactTel3` VARCHAR(191) NOT NULL,
    `repertoireId` INTEGER NULL,
    `villeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Stock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `designation` VARCHAR(191) NOT NULL,
    `sysDate` DATETIME(3) NOT NULL,
    `pahtGrossiste` DECIMAL(65, 30) NOT NULL,
    `prixCommercial` DECIMAL(65, 30) NOT NULL,
    `tva` DECIMAL(65, 30) NOT NULL,
    `pattc` DECIMAL(65, 30) NOT NULL,
    `pvttc` DECIMAL(65, 30) NOT NULL,
    `pvaht` DECIMAL(65, 30) NOT NULL,
    `benifice` DECIMAL(65, 30) NOT NULL,
    `qteStock` INTEGER NOT NULL,
    `qtePVMin` INTEGER NOT NULL,
    `qtePVMin3` INTEGER NOT NULL,
    `qtePVMin4` INTEGER NOT NULL,
    `qteFacturer` INTEGER NOT NULL,
    `prixVentMin1` DECIMAL(65, 30) NOT NULL,
    `prixVentMin2` DECIMAL(65, 30) NOT NULL,
    `prixVentMin3` DECIMAL(65, 30) NOT NULL,
    `prixVentMin4` DECIMAL(65, 30) NOT NULL,
    `remiseMax` DECIMAL(65, 30) NOT NULL,
    `remiseMax2` DECIMAL(65, 30) NOT NULL,
    `remiseMax3` DECIMAL(65, 30) NOT NULL,
    `remiseMax4` DECIMAL(65, 30) NOT NULL,
    `prixImport` DECIMAL(65, 30) NOT NULL,
    `commission` DECIMAL(65, 30) NOT NULL,
    `archiver` INTEGER NOT NULL,
    `qteStockImport` INTEGER NOT NULL,
    `avecRemise` BOOLEAN NOT NULL DEFAULT false,
    `prixAchatBiggerPrixVente` BOOLEAN NOT NULL DEFAULT false,
    `facturer100` BOOLEAN NOT NULL DEFAULT false,
    `promotion1` VARCHAR(191) NOT NULL,
    `promotion2` VARCHAR(191) NOT NULL,
    `repertoireId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
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
    `validationMnt` DECIMAL(65, 30) NOT NULL,
    `motPassFake` VARCHAR(191) NOT NULL,
    `commercial` BOOLEAN NOT NULL DEFAULT false,
    `pvLibre` BOOLEAN NOT NULL DEFAULT false,
    `gerant` BOOLEAN NOT NULL DEFAULT false,
    `magasinier` BOOLEAN NOT NULL DEFAULT false,
    `bulltinPaie` BOOLEAN NOT NULL DEFAULT false,
    `imprimStockSimple` BOOLEAN NOT NULL DEFAULT false,
    `livraisonLimite` BOOLEAN NOT NULL DEFAULT false,
    `repertoireId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Droit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
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
