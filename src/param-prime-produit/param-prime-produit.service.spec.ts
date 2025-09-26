import { Test, TestingModule } from '@nestjs/testing';
import { ParamPrimeProduitService } from './param-prime-produit.service';

describe('ParamPrimeProduitService', () => {
  let service: ParamPrimeProduitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParamPrimeProduitService],
    }).compile();

    service = module.get<ParamPrimeProduitService>(ParamPrimeProduitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
