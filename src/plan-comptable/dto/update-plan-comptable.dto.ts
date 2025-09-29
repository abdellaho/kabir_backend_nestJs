import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanComptableDto } from './create-plan-comptable.dto';

export class UpdatePlanComptableDto extends PartialType(CreatePlanComptableDto) {}
