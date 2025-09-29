import { Test, TestingModule } from '@nestjs/testing';
import { LivraisonController } from './livraison.controller';
import { LivraisonService } from './livraison.service';

describe('LivraisonController', () => {
  let controller: LivraisonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LivraisonController],
      providers: [LivraisonService],
    }).compile();

    controller = module.get<LivraisonController>(LivraisonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
