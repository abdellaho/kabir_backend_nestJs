import { Test, TestingModule } from '@nestjs/testing';
import { DetAchatLivraisonController } from './det-achat-livraison.controller';
import { DetAchatLivraisonService } from './det-achat-livraison.service';

describe('DetAchatLivraisonController', () => {
  let controller: DetAchatLivraisonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetAchatLivraisonController],
      providers: [DetAchatLivraisonService],
    }).compile();

    controller = module.get<DetAchatLivraisonController>(DetAchatLivraisonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
