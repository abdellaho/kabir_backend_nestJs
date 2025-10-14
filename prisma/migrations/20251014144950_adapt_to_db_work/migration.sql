/*
  Warnings:

  - You are about to alter the column `typeRepertoire` on the `repertoire` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Int`.
  - You are about to alter the column `typePersonnel` on the `repertoire` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Int`.

*/
-- AlterTable
ALTER TABLE `repertoire` MODIFY `typeRepertoire` INTEGER NOT NULL,
    MODIFY `typePersonnel` INTEGER NOT NULL;
