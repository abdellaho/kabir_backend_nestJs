import { Test, TestingModule } from '@nestjs/testing';
import { AchatFactureService } from './achat-facture.service';

describe('AchatFactureService', () => {
  let service: AchatFactureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AchatFactureService],
    }).compile();

    service = module.get<AchatFactureService>(AchatFactureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
