import { Test, TestingModule } from '@nestjs/testing';
import { DetFactureService } from './det-facture.service';

describe('DetFactureService', () => {
  let service: DetFactureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetFactureService],
    }).compile();

    service = module.get<DetFactureService>(DetFactureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
