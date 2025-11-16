import { Test, TestingModule } from '@nestjs/testing';
import { StockDepotController } from './stock-depot.controller';
import { StockDepotService } from './stock-depot.service';

describe('StockDepotController', () => {
  let controller: StockDepotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockDepotController],
      providers: [StockDepotService],
    }).compile();

    controller = module.get<StockDepotController>(StockDepotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
