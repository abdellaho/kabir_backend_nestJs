import { Module } from '@nestjs/common';
import { RepertoireService } from './repertoire.service';
import { RepertoireController } from './repertoire.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RepertoireController],
  providers: [RepertoireService],
})
export class RepertoireModule {}
