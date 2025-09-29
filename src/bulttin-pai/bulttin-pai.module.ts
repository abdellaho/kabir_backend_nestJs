import { Module } from '@nestjs/common';
import { BulttinPaiService } from './bulttin-pai.service';
import { BulttinPaiController } from './bulttin-pai.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BulttinPaiController],
  providers: [BulttinPaiService],
})
export class BulttinPaiModule {}
