import { Module } from '@nestjs/common';
import { ParamComissService } from './param-comiss.service';
import { ParamComissController } from './param-comiss.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ParamComissController],
  providers: [ParamComissService],
})
export class ParamComissModule {}
