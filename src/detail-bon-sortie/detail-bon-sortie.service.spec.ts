import { Test, TestingModule } from '@nestjs/testing';
import { DetailBonSortieService } from './detail-bon-sortie.service';

describe('DetailBonSortieService', () => {
  let service: DetailBonSortieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailBonSortieService],
    }).compile();

    service = module.get<DetailBonSortieService>(DetailBonSortieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
