import { Test, TestingModule } from '@nestjs/testing';
import { ParamComissService } from './param-comiss.service';

describe('ParamComissService', () => {
  let service: ParamComissService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParamComissService],
    }).compile();

    service = module.get<ParamComissService>(ParamComissService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
