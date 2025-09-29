import { Test, TestingModule } from '@nestjs/testing';
import { BulttinPaiController } from './bulttin-pai.controller';
import { BulttinPaiService } from './bulttin-pai.service';

describe('BulttinPaiController', () => {
  let controller: BulttinPaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BulttinPaiController],
      providers: [BulttinPaiService],
    }).compile();

    controller = module.get<BulttinPaiController>(BulttinPaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
