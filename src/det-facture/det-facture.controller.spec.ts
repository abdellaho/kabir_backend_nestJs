import { Test, TestingModule } from '@nestjs/testing';
import { DetFactureController } from './det-facture.controller';
import { DetFactureService } from './det-facture.service';

describe('DetFactureController', () => {
  let controller: DetFactureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetFactureController],
      providers: [DetFactureService],
    }).compile();

    controller = module.get<DetFactureController>(DetFactureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
