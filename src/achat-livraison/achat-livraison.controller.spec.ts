import { Test, TestingModule } from '@nestjs/testing';
import { AchatLivraisonController } from './achat-livraison.controller';
import { AchatLivraisonService } from './achat-livraison.service';

describe('AchatLivraisonController', () => {
  let controller: AchatLivraisonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AchatLivraisonController],
      providers: [AchatLivraisonService],
    }).compile();

    controller = module.get<AchatLivraisonController>(AchatLivraisonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
