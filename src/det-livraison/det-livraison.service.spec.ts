import { Test, TestingModule } from '@nestjs/testing';
import { DetLivraisonService } from './det-livraison.service';

describe('DetLivraisonService', () => {
  let service: DetLivraisonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetLivraisonService],
    }).compile();

    service = module.get<DetLivraisonService>(DetLivraisonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
