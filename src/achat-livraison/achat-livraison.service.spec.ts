import { Test, TestingModule } from '@nestjs/testing';
import { AchatLivraisonService } from './achat-livraison.service';

describe('AchatLivraisonService', () => {
  let service: AchatLivraisonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AchatLivraisonService],
    }).compile();

    service = module.get<AchatLivraisonService>(AchatLivraisonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
