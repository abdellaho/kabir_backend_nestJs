import { Test, TestingModule } from '@nestjs/testing';
import { DetAchatFactureService } from './det-achat-facture.service';

describe('DetAchatFactureService', () => {
  let service: DetAchatFactureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetAchatFactureService],
    }).compile();

    service = module.get<DetAchatFactureService>(DetAchatFactureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
