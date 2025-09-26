import { Module } from '@nestjs/common';
import { VilleService } from './ville.service';
import { VilleController } from './ville.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [VilleController],
  providers: [VilleService],
})
export class VilleModule {}
