/*
  Warnings:

  - You are about to drop the column `improtationsId` on the `detimportations` table. All the data in the column will be lost.
  - You are about to drop the column `tel` on the `etablissement` table. All the data in the column will be lost.
  - You are about to alter the column `pourcentageLiv` on the `etablissement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to drop the column `salaireParDefaut` on the `repertoire` table. All the data in the column will be lost.
  - You are about to alter the column `typeRepertoire` on the `repertoire` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(0))`.
  - The primary key for the `solde` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `improtations` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `importationsId` to the `DetImportations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tel1` to the `Etablissement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tel2` to the `Etablissement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tel3` to the `Etablissement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cin` to the `Repertoire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login` to the `Repertoire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Repertoire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salaire` to the `Repertoire` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typePersonnel` to the `Repertoire` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `detimportations` DROP FOREIGN KEY `DetImportations_improtationsId_fkey`;

-- DropForeignKey
ALTER TABLE `improtations` DROP FOREIGN KEY `Improtations_employeOperateurId_fkey`;

-- DropForeignKey
ALTER TABLE `improtations` DROP FOREIGN KEY `Improtations_repertoireFourId_fkey`;

-- DropIndex
DROP INDEX `DetImportations_improtationsId_fkey` ON `detimportations`;

-- AlterTable
ALTER TABLE `detimportations` DROP COLUMN `improtationsId`,
    ADD COLUMN `importationsId` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `etablissement` DROP COLUMN `tel`,
    ADD COLUMN `tel1` VARCHAR(191) NOT NULL,
    ADD COLUMN `tel2` VARCHAR(191) NOT NULL,
    ADD COLUMN `tel3` VARCHAR(191) NOT NULL,
    MODIFY `pourcentageLiv` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `repertoire` DROP COLUMN `salaireParDefaut`,
    ADD COLUMN `cin` VARCHAR(191) NOT NULL,
    ADD COLUMN `etatComptePersonnel` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `login` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `salaire` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `typePersonnel` INTEGER NOT NULL,
    MODIFY `typeRepertoire` ENUM('0', '1', '2', '3', '4', '5', '6') NOT NULL;

-- AlterTable
ALTER TABLE `solde` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `improtations`;

-- CreateTable
CREATE TABLE `Importations` (
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

-- AddForeignKey
ALTER TABLE `DetImportations` ADD CONSTRAINT `DetImportations_importationsId_fkey` FOREIGN KEY (`importationsId`) REFERENCES `Importations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Importations` ADD CONSTRAINT `Importations_repertoireFourId_fkey` FOREIGN KEY (`repertoireFourId`) REFERENCES `Repertoire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Importations` ADD CONSTRAINT `Importations_employeOperateurId_fkey` FOREIGN KEY (`employeOperateurId`) REFERENCES `Employe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
