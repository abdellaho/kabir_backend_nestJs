import { Test, TestingModule } from '@nestjs/testing';
import { DetBulttinPaiService } from './det-bulttin-pai.service';

describe('DetBulttinPaiService', () => {
  let service: DetBulttinPaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetBulttinPaiService],
    }).compile();

    service = module.get<DetBulttinPaiService>(DetBulttinPaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
