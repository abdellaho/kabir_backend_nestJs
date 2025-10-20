/*
  Warnings:

  - You are about to alter the column `capitale` on the `etablissement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `etablissement` DROP FOREIGN KEY `Etablissement_villeId_fkey`;

-- DropIndex
DROP INDEX `Etablissement_villeId_fkey` ON `etablissement`;

-- AlterTable
ALTER TABLE `etablissement` MODIFY `capitale` INTEGER NOT NULL,
    MODIFY `villeId` BIGINT NULL;

-- AddForeignKey
ALTER TABLE `Etablissement` ADD CONSTRAINT `Etablissement_villeId_fkey` FOREIGN KEY (`villeId`) REFERENCES `Ville`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
