import { Test, TestingModule } from '@nestjs/testing';
import { RepertoireController } from './repertoire.controller';
import { RepertoireService } from './repertoire.service';

describe('RepertoireController', () => {
  let controller: RepertoireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepertoireController],
      providers: [RepertoireService],
    }).compile();

    controller = module.get<RepertoireController>(RepertoireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
