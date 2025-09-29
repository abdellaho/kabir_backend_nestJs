import { Test, TestingModule } from '@nestjs/testing';
import { DetAchatFactureController } from './det-achat-facture.controller';
import { DetAchatFactureService } from './det-achat-facture.service';

describe('DetAchatFactureController', () => {
  let controller: DetAchatFactureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetAchatFactureController],
      providers: [DetAchatFactureService],
    }).compile();

    controller = module.get<DetAchatFactureController>(DetAchatFactureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
