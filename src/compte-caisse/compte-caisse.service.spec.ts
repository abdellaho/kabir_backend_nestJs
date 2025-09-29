import { Test, TestingModule } from '@nestjs/testing';
import { CompteCaisseService } from './compte-caisse.service';

describe('CompteCaisseService', () => {
  let service: CompteCaisseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompteCaisseService],
    }).compile();

    service = module.get<CompteCaisseService>(CompteCaisseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
