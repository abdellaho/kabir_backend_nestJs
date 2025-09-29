import { Test, TestingModule } from '@nestjs/testing';
import { DetBulttinLivraisonController } from './det-bulttin-livraison.controller';
import { DetBulttinLivraisonService } from './det-bulttin-livraison.service';

describe('DetBulttinLivraisonController', () => {
  let controller: DetBulttinLivraisonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetBulttinLivraisonController],
      providers: [DetBulttinLivraisonService],
    }).compile();

    controller = module.get<DetBulttinLivraisonController>(DetBulttinLivraisonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
