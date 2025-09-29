import { Test, TestingModule } from '@nestjs/testing';
import { DetAchatLivraisonService } from './det-achat-livraison.service';

describe('DetAchatLivraisonService', () => {
  let service: DetAchatLivraisonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetAchatLivraisonService],
    }).compile();

    service = module.get<DetAchatLivraisonService>(DetAchatLivraisonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
