-- CreateTable
CREATE TABLE `StockDepot` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `qteStockDepot` INTEGER NOT NULL,
    `dateOperation` DATETIME(3) NOT NULL,
    `dateSys` DATETIME(3) NOT NULL,
    `stockId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StockDepot` ADD CONSTRAINT `StockDepot_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `Stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
