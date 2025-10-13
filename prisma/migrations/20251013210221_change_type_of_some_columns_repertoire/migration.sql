/*
  Warnings:

  - The values [5,6] on the enum `Repertoire_typeRepertoire` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `typePersonnel` on the `repertoire` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `repertoire` MODIFY `typeRepertoire` ENUM('0', '1', '2', '3', '4') NOT NULL,
    MODIFY `typePersonnel` ENUM('0', '1', '2', '3', '4', '5', '6') NOT NULL;
