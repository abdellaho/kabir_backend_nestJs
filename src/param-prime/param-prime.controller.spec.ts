import { Test, TestingModule } from '@nestjs/testing';
import { ParamPrimeController } from './param-prime.controller';
import { ParamPrimeService } from './param-prime.service';

describe('ParamPrimeController', () => {
  let controller: ParamPrimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParamPrimeController],
      providers: [ParamPrimeService],
    }).compile();

    controller = module.get<ParamPrimeController>(ParamPrimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
