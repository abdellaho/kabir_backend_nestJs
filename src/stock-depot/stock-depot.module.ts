import { Module } from '@nestjs/common';
import { StockDepotService } from './stock-depot.service';
import { StockDepotController } from './stock-depot.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StockDepotController],
  providers: [StockDepotService],
})
export class StockDepotModule {}
