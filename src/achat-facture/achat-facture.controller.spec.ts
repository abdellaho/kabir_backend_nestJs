import { Test, TestingModule } from '@nestjs/testing';
import { AchatFactureController } from './achat-facture.controller';
import { AchatFactureService } from './achat-facture.service';

describe('AchatFactureController', () => {
  let controller: AchatFactureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AchatFactureController],
      providers: [AchatFactureService],
    }).compile();

    controller = module.get<AchatFactureController>(AchatFactureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
