import { Test, TestingModule } from '@nestjs/testing';
import { PlanComptableController } from './plan-comptable.controller';
import { PlanComptableService } from './plan-comptable.service';

describe('PlanComptableController', () => {
  let controller: PlanComptableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanComptableController],
      providers: [PlanComptableService],
    }).compile();

    controller = module.get<PlanComptableController>(PlanComptableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
