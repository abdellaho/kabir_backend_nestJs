import { Test, TestingModule } from '@nestjs/testing';
import { ParamComissController } from './param-comiss.controller';
import { ParamComissService } from './param-comiss.service';

describe('ParamComissController', () => {
  let controller: ParamComissController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParamComissController],
      providers: [ParamComissService],
    }).compile();

    controller = module.get<ParamComissController>(ParamComissController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
