import { Test, TestingModule } from '@nestjs/testing';
import { DetImportationsService } from './det-importations.service';

describe('DetImportationsService', () => {
  let service: DetImportationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetImportationsService],
    }).compile();

    service = module.get<DetImportationsService>(DetImportationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
