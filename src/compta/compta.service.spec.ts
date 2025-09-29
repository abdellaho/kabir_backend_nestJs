import { Test, TestingModule } from '@nestjs/testing';
import { ComptaService } from './compta.service';

describe('ComptaService', () => {
  let service: ComptaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComptaService],
    }).compile();

    service = module.get<ComptaService>(ComptaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
