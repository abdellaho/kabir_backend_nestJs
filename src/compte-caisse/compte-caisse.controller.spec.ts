import { Test, TestingModule } from '@nestjs/testing';
import { CompteCaisseController } from './compte-caisse.controller';
import { CompteCaisseService } from './compte-caisse.service';

describe('CompteCaisseController', () => {
  let controller: CompteCaisseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompteCaisseController],
      providers: [CompteCaisseService],
    }).compile();

    controller = module.get<CompteCaisseController>(CompteCaisseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
