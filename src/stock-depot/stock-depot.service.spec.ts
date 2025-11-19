import { Test, TestingModule } from '@nestjs/testing';
import { StockDepotService } from './stock-depot.service';

describe('StockDepotService', () => {
  let service: StockDepotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockDepotService],
    }).compile();

    service = module.get<StockDepotService>(StockDepotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
