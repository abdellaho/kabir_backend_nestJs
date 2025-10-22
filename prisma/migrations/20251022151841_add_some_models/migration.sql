-- CreateTable
CREATE TABLE `Fournisseur` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `designation` VARCHAR(191) NOT NULL,
    `type` INTEGER NOT NULL,
    `tel1` VARCHAR(191) NOT NULL,
    `tel2` VARCHAR(191) NOT NULL,
    `ice` VARCHAR(191) NOT NULL,
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
    `salaire` DECIMAL(8, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Voiture` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `numVoiture` VARCHAR(191) NOT NULL,
    `kmMax` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Fournisseur` ADD CONSTRAINT `Fournisseur_villeId_fkey` FOREIGN KEY (`villeId`) REFERENCES `Ville`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
