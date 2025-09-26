import { Test, TestingModule } from '@nestjs/testing';
import { ParamPrimeProduitController } from './param-prime-produit.controller';
import { ParamPrimeProduitService } from './param-prime-produit.service';

describe('ParamPrimeProduitController', () => {
  let controller: ParamPrimeProduitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParamPrimeProduitController],
      providers: [ParamPrimeProduitService],
    }).compile();

    controller = module.get<ParamPrimeProduitController>(ParamPrimeProduitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
