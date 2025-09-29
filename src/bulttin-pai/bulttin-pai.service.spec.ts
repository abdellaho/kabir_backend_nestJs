import { Test, TestingModule } from '@nestjs/testing';
import { BulttinPaiService } from './bulttin-pai.service';

describe('BulttinPaiService', () => {
  let service: BulttinPaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BulttinPaiService],
    }).compile();

    service = module.get<BulttinPaiService>(BulttinPaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
