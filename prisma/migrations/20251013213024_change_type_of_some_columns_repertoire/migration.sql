-- DropForeignKey
ALTER TABLE `repertoire` DROP FOREIGN KEY `Repertoire_villeId_fkey`;

-- DropIndex
DROP INDEX `Repertoire_villeId_fkey` ON `repertoire`;

-- AlterTable
ALTER TABLE `repertoire` MODIFY `villeId` BIGINT NULL;

-- AddForeignKey
ALTER TABLE `Repertoire` ADD CONSTRAINT `Repertoire_villeId_fkey` FOREIGN KEY (`villeId`) REFERENCES `Ville`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
