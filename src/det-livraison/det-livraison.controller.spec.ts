import { Test, TestingModule } from '@nestjs/testing';
import { DetLivraisonController } from './det-livraison.controller';
import { DetLivraisonService } from './det-livraison.service';

describe('DetLivraisonController', () => {
  let controller: DetLivraisonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetLivraisonController],
      providers: [DetLivraisonService],
    }).compile();

    controller = module.get<DetLivraisonController>(DetLivraisonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
