import { Test, TestingModule } from '@nestjs/testing';
import { ComptaController } from './compta.controller';
import { ComptaService } from './compta.service';

describe('ComptaController', () => {
  let controller: ComptaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComptaController],
      providers: [ComptaService],
    }).compile();

    controller = module.get<ComptaController>(ComptaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
