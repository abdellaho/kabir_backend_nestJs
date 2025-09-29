import { PartialType } from '@nestjs/mapped-types';
import { CreateComptaDto } from './create-compta.dto';

export class UpdateComptaDto extends PartialType(CreateComptaDto) {}
