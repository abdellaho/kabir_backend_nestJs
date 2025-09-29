import { Module } from '@nestjs/common';
import { ChequeService } from './cheque.service';
import { ChequeController } from './cheque.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ChequeController],
  providers: [ChequeService],
})
export class ChequeModule {}
