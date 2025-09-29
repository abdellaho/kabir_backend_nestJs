import { Test, TestingModule } from '@nestjs/testing';
import { DetailBonSortieController } from './detail-bon-sortie.controller';
import { DetailBonSortieService } from './detail-bon-sortie.service';

describe('DetailBonSortieController', () => {
  let controller: DetailBonSortieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailBonSortieController],
      providers: [DetailBonSortieService],
    }).compile();

    controller = module.get<DetailBonSortieController>(DetailBonSortieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
