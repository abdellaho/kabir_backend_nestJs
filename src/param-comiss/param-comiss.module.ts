import { Module } from '@nestjs/common';
import { ParamComissService } from './param-comiss.service';
import { ParamComissController } from './param-comiss.controller';

@Module({
  controllers: [ParamComissController],
  providers: [ParamComissService],
})
export class ParamComissModule {}
