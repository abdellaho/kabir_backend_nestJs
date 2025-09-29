import { Test, TestingModule } from '@nestjs/testing';
import { DetImportationsController } from './det-importations.controller';
import { DetImportationsService } from './det-importations.service';

describe('DetImportationsController', () => {
  let controller: DetImportationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetImportationsController],
      providers: [DetImportationsService],
    }).compile();

    controller = module.get<DetImportationsController>(DetImportationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
