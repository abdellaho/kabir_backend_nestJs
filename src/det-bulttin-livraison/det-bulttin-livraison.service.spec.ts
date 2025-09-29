import { Test, TestingModule } from '@nestjs/testing';
import { DetBulttinLivraisonService } from './det-bulttin-livraison.service';

describe('DetBulttinLivraisonService', () => {
  let service: DetBulttinLivraisonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetBulttinLivraisonService],
    }).compile();

    service = module.get<DetBulttinLivraisonService>(DetBulttinLivraisonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
