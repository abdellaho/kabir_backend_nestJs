import { Test, TestingModule } from '@nestjs/testing';
import { BonSortieService } from './bon-sortie.service';

describe('BonSortieService', () => {
  let service: BonSortieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BonSortieService],
    }).compile();

    service = module.get<BonSortieService>(BonSortieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
