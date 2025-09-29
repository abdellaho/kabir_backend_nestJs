import { PartialType } from '@nestjs/mapped-types';
import { CreateCompteCaisseDto } from './create-compte-caisse.dto';

export class UpdateCompteCaisseDto extends PartialType(CreateCompteCaisseDto) {}
