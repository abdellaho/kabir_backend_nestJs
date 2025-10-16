/*
  Warnings:

  - You are about to drop the column `paysId` on the `ville` table. All the data in the column will be lost.
  - You are about to drop the `pays` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ville` DROP FOREIGN KEY `Ville_paysId_fkey`;

-- DropIndex
DROP INDEX `Ville_paysId_fkey` ON `ville`;

-- AlterTable
ALTER TABLE `ville` DROP COLUMN `paysId`;

-- DropTable
DROP TABLE `pays`;
