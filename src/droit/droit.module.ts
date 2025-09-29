import { Module } from '@nestjs/common';
import { DroitService } from './droit.service';
import { DroitController } from './droit.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DroitController],
  providers: [DroitService],
})
export class DroitModule {}
