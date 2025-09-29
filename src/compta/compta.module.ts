import { Module } from '@nestjs/common';
import { ComptaService } from './compta.service';
import { ComptaController } from './compta.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ComptaController],
  providers: [ComptaService],
})
export class ComptaModule {}
