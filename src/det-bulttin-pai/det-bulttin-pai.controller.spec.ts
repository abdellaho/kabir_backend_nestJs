import { Test, TestingModule } from '@nestjs/testing';
import { DetBulttinPaiController } from './det-bulttin-pai.controller';
import { DetBulttinPaiService } from './det-bulttin-pai.service';

describe('DetBulttinPaiController', () => {
  let controller: DetBulttinPaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetBulttinPaiController],
      providers: [DetBulttinPaiService],
    }).compile();

    controller = module.get<DetBulttinPaiController>(DetBulttinPaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
