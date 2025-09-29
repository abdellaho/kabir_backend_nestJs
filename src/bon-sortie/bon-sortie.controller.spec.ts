import { Test, TestingModule } from '@nestjs/testing';
import { BonSortieController } from './bon-sortie.controller';
import { BonSortieService } from './bon-sortie.service';

describe('BonSortieController', () => {
  let controller: BonSortieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BonSortieController],
      providers: [BonSortieService],
    }).compile();

    controller = module.get<BonSortieController>(BonSortieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
