import { PartialType } from '@nestjs/mapped-types';
import { CreateComptabiliteDto } from './create-comptabilite.dto';

export class UpdateComptabiliteDto extends PartialType(CreateComptabiliteDto) {}
