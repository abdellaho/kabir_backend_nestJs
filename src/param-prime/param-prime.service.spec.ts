import { Test, TestingModule } from '@nestjs/testing';
import { ParamPrimeService } from './param-prime.service';

describe('ParamPrimeService', () => {
  let service: ParamPrimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParamPrimeService],
    }).compile();

    service = module.get<ParamPrimeService>(ParamPrimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
